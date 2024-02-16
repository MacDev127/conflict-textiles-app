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
        <Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList aria-label="tabs example" onChange={handleChange}>
                        <Tab label="Location" value="1" />
                        <Tab label="Event Details" value="2" />
                        <Tab label="Tab three" value="3" />
                    </TabList>
                </Box>

                <TabPanel value="1">
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2312.144733267759!2d-5.934681222860783!3d54.58382378141748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486108efedca59cf%3A0xc2e112f404ece73f!2sThe%20McClay%20Library!5e0!3m2!1sen!2suk!4v1708124993248!5m2!1sen!2suk"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </TabPanel>
                <TabPanel value="2">
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
                                Outcome: <p>{event.outcome}</p>{" "}
                            </li>
                            <li>
                                <span>
                                    Documents:
                                    <a
                                        href={event.document_url}
                                        target="_blank"
                                    >
                                        Document 1
                                    </a>
                                    <a
                                        href={event.document_url}
                                        target="_blank"
                                    >
                                        Document 2
                                    </a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    Textiles Displayed:
                                    <a
                                        href={event.textile_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Arpillera 1
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </TabPanel>
                <TabPanel value="3">Panel Three</TabPanel>
            </TabContext>
        </Box>
    );
};

export default TabsComponent;
