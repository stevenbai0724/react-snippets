import React, { useContext, useEffect, useState } from "react";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Calendar from "../components/Calendar";

import API from "../http";
import {
    getAccessToken,
    getRefreshBody,
    setAccessToken,
    setRefreshToken,
} from "../http/utils";
import OpportunityCard from "../components/OpportunityCard";
import { Grid, List, ListItem, Typography } from "@material-ui/core";
import { uniqueId } from "lodash";
import { dashboardContext } from "../context/dashboardContext";

const Dashboard = () => {
    // this blocked is used only before login/register portal built up, delete later
    API.configApiRequestToken(getAccessToken);
    API.configAuthToken(getRefreshBody, setAccessToken);
    const [events, setEvents] = useState([]);
    const userAuth = {
        email: "organization@email.com",
        password: "123456",
        role: "organization",
    };

    const context = useContext(dashboardContext);
    const {
        dashboard: { opportunityType, sortBy },
    } = context;

    useEffect(() => {
        const r = async () => {
            try {
                const {
                    data: { accessToken, refreshToken },
                } = await API.login(userAuth);

                const query = {
                    type: opportunityType,
                    order: sortBy,
                };
                setAccessToken(accessToken);
                setRefreshToken(refreshToken);

                const { data: events } = await API.searchEvent(query);
                setEvents(events);
            } catch (error) {
                console.log(error);
            }
        };
        r();
    }, [context]);
    // delete later block end

    const daysHaveOpportunities = events.map(({ start }) =>
        new Date(start).toDateString()
    );

    return (
        <div>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid container>
                    <Grid item lg={3}>
                        <br />
                        <Calendar
                            daysHaveOpportunities={daysHaveOpportunities}
                        />
                    </Grid>
                    <Grid item lg={9}>
                        <List>
                            <ListItem>
                                <Typography variant="h3">
                                    Your Opportunities
                                </Typography>
                            </ListItem>
                            {events.map((opportunity) => (
                                <ListItem key={uniqueId()}>
                                    <OpportunityCard
                                        opportunity={opportunity}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default Dashboard;
