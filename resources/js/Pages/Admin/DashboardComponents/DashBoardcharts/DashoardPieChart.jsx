import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const DashboardPieChart = () => {
    return (
        <PieChart
            colors={[
                "red",
                "blue",
                "green",
                "pink",
                "yellow",
                "purple",
                "orange",
                "cyan",
                "grey",
            ]}
            series={[
                {
                    data: [
                        { id: 0, value: 10, label: "Uk" },
                        { id: 1, value: 15, label: "Japan" },
                        { id: 2, value: 10, label: "Germany" },
                        { id: 3, value: 24, label: "Chile" },
                        { id: 4, value: 30, label: "Ireland" },
                        { id: 5, value: 21, label: "France" },
                        { id: 6, value: 14, label: "USA" },
                        { id: 7, value: 40, label: "Spain" },
                        { id: 8, value: 7, label: "Sweden" },
                    ],
                },
            ]}
            width={480}
            height={300}
        />
    );
};

export default DashboardPieChart;
