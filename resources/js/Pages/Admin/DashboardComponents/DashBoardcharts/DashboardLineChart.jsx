import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const DashboardLineChart = () => {
    return (
        <LineChart
            sx={{
                "& .MuiLineElement-root": {
                    strokeWidth: 4,
                },
            }}
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
                {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
            ]}
            width={500}
            height={300}
        />
    );
};

export default DashboardLineChart;
