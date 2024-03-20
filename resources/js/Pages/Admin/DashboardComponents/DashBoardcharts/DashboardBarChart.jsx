import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const DashboardBarChart = () => {
    const dataset = [
        { arpilleras: 57, quilts: 86, banners: 21, month: "Jan" },
        { arpilleras: 52, quilts: 78, banners: 28, month: "Fev" },
        { arpilleras: 53, quilts: 106, banners: 41, month: "Mar" },
        { arpilleras: 56, quilts: 92, banners: 73, month: "Apr" },
        { arpilleras: 69, quilts: 92, banners: 99, month: "May" },
        {
            arpilleras: 63,
            quilts: 103,
            banners: 144,
            month: "June",
        },
        {
            arpilleras: 60,
            quilts: 105,
            banners: 319,
            month: "July",
        },
        { arpilleras: 60, quilts: 106, banners: 249, month: "Aug" },
        { arpilleras: 51, quilts: 95, banners: 131, month: "Sept" },
        { arpilleras: 65, quilts: 97, banners: 55, month: "Oct" },
        { arpilleras: 64, quilts: 76, banners: 48, month: "Nov" },
        { arpilleras: 70, quilts: 103, banners: 25, month: "Dec" },
    ];

    const valueFormatter = (value) => `${value}`;

    return (
        <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={[
                { dataKey: "arpilleras", label: "Arpilleras", valueFormatter },
                { dataKey: "quilts", label: "Quilts", valueFormatter },
                { dataKey: "banners", label: "Banners", valueFormatter },
            ]}
            layout="horizontal"
            width={500}
            height={400}
        />
    );
};

export default DashboardBarChart;
