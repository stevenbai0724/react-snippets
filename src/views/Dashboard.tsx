import React, { useEffect, useState } from "react";
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

    useEffect(() => {
        const r = async () => {
            try {
                const {
                    data: { accessToken, refreshToken },
                } = await API.login(userAuth);

                const query = {
                    type: "past",
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
    }, []);
    // delete later block end
    console.log(events);

    return (
        <div>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid container>
                    <Grid item lg={3}>
                        <Calendar />
                    </Grid>
                    <Grid item lg={9}>
                        <List>
                            <ListItem>
                                <Typography variant="h4">
                                    Your Opportunities
                                </Typography>
                            </ListItem>
                            {events.map((opportunity) => (
                                <ListItem>
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
