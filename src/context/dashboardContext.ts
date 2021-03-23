import { createContext } from "react";

export const intialDashboard = {
    sortBy: "",
    date: "",
    searchQuery: "",
    opportunityType: "",
};

type DashboardContextType = {
    sortBy: string;
    date: string;
    searchQuery: string;
    opportunityType: string;
    setDashboard: React.Dispatch<
        React.SetStateAction<{
            sortBy: string;
            date: string;
            searchQuery: string;
            opportunityType: string;
        }>
    >;
};

export const dashboardContext = createContext<DashboardContextType | null>(
    null
);
