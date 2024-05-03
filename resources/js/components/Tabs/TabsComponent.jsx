import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import "./TabsComponent.css";
const TabsComponent = ({ event }) => {
    const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{
                width: "100%",
                overflowX: "auto",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": {
                    height: "8px",
                },
                "&::-webkit-scrollbar-track": {
                    boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "darkgrey",
                    outline: "1px solid slategrey",
                },
                "@media (max-width: 414px)": {
                    width: "100%",
                },
            }}
        >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList aria-label="tabs example" onChange={handleChange}>
                        <Tab label="Event Details" value="1" />
                        <Tab label="Event Items" value="2" />
                    </TabList>
                </Box>

                <TabPanel value="1">
                    <div className="tab__details-container">
                        <h1>{event.title}</h1>
                        <ul>
                            <li>
                                Commissioned By: <p>{event.commissioned_by}</p>{" "}
                            </li>
                            <li>
                                Curator: <p>{event.curator}</p>
                            </li>
                            <li>
                                Facilitator: <p>{event.facilitator}</p>
                            </li>

                            <li>
                                Venue: <p>{event.venue}</p>
                            </li>
                            <li>
                                <span className="event__outcome">
                                    <span className="event__outcome-title">
                                        <p>Outcome:</p>
                                    </span>
                                    <p>{event.outcome}</p>
                                </span>
                            </li>
                        </ul>
                    </div>
                </TabPanel>
                <TabPanel value="2">
                    <div className="tab__details-container">
                        <ul>
                            <li>
                                <span>
                                    <p className="tab__details-container-title">
                                        Textiles Displayed:
                                    </p>
                                    <a
                                        href={event.textile_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Arpillera 1
                                    </a>
                                    <a
                                        href={event.textile_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Arpillera 2
                                    </a>
                                    <a
                                        href={event.textile_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Arpillera 3
                                    </a>
                                </span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>
                                    <p className="tab__details-container-title">
                                        Event Documents:
                                    </p>
                                    <a
                                        href={event.document_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Document 1
                                    </a>
                                    <a
                                        href={event.document_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Document 2
                                    </a>
                                    <a
                                        href={event.document_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Document 3
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </TabPanel>
            </TabContext>
        </Box>
    );
};

export default TabsComponent;
