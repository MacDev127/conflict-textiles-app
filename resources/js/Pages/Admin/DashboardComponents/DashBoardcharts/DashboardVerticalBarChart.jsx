import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const DashboardVerticalBarChart = () => {
    return (
        <BarChart
            xAxis={[
                {
                    scaleType: "band",
                    data: [
                        "Home",
                        "About Us",
                        "Collection",
                        "Events",
                        "Contact",
                    ],
                },
            ]}
            series={[
                {
                    data: [120, 300, 260, 180, 400],
                    label: "Page Views",
                },
            ]}
            width={500}
            height={300}
        />
    );
};

export default DashboardVerticalBarChart;
