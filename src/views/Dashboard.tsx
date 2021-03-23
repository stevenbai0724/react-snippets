import React, { useEffect } from "react";
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

const Dashboard = () => {
    // this blocked is used only before login/register portal built up, delete later
    API.configApiRequestToken(getAccessToken);
    API.configAuthToken(getRefreshBody, setAccessToken);

    const userAuth = {
        email: "organization@email.com",
        password: "123456",
        role: "organization",
    };
    console.log("sdfads");

    useEffect(() => {
        const r = async () => {
            try {
                const {
                    data: { accessToken, refreshToken },
                } = await API.login(userAuth);

                const query = {
                    type: "past",
                };
                const ss = await API.searchEvent(query);
                console.log(ss);

                setAccessToken(accessToken);
                setRefreshToken(refreshToken);
            } catch (error) {
                console.log(error);
            }
        };
        r();
    }, []);
    // delete later block end

    return (
        <div>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Calendar />
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default Dashboard;
