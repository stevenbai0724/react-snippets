import React, { useContext, useEffect, useState } from "react";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Grid, List, ListItem, Typography } from "@material-ui/core";
import { uniqueId } from "lodash";
import Calendar from "../components/Calendar";
import {
    configApiRequestToken,
    configAuthToken,
    getAccessToken,
    getRefreshBody,
    setAccessToken,
    login,
    searchEvent,
    setRefreshToken,
    AuthUser,
} from "@icontribute-founder/api-wrapper";

import OpportunityCard from "../components/OpportunityCard";
import { dashboardContext } from "../context/dashboardContext";
import { dashboardCalendarTheme } from "../themes";

const Dashboard = () => {
    // this blocked is used only before login/register portal built up, delete later
    configApiRequestToken(getAccessToken);
    configAuthToken(getRefreshBody, setAccessToken);
    const [events, setEvents] = useState([]);
    const userAuth: any = {
        email: "jiachengzhang1@email.arizona.edu",
        password: "password",
        type: "organization",
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
                } = await login(userAuth);

                const query = {
                    type: opportunityType,
                    order: sortBy,
                };
                setAccessToken(accessToken);
                setRefreshToken(refreshToken);

                const { data: events } = await searchEvent(query);
                console.log("this is the events: ", events)
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

    const handleSelectDate = (date: Date) => {
        console.log(date);
    };

    return (
        <div>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid container>
                    <Grid item lg={3}>
                        <br />
                        <Calendar
                            daysHaveOpportunities={daysHaveOpportunities}
                            theme={dashboardCalendarTheme}
                            handleSelectDate={handleSelectDate}
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
