import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordian = ({ textileDetail }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div style={{ width: "80%" }}>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    style={{ minHeight: "80px" }}
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Description
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography key={textileDetail.id}>
                        {textileDetail.description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    style={{ minHeight: "80px" }}
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Publications
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus
                        feugiat lectus, varius pulvinar diam eros in elit.
                        Pellentesque convallis laoreet laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    style={{ minHeight: "80px" }}
                >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Exhibited At
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat
                        nisl. Integer sit amet egestas eros, vitae egestas
                        augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Accordian;
