import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { router } from "@inertiajs/react";
import "./pagination.css";

const PaginationComponent = ({ total, current, onChange }) => {
    // Handles page change events
    const handleChange = (event, value) => {
        onChange(value); // Propagate up or use Inertia to navigate
        router.visit(
            `/events?page=${value}`,
            { preserveState: true },
            { preserveScroll: true }
        );
    };

    return (
        <Stack sx={{ marginTop: "50px" }} spacing={2}>
            <Pagination
                count={total}
                page={current}
                onChange={handleChange}
                color="primary"
                size="small"
                variant="filled"
                shape="rounded"
            />
        </Stack>
    );
};

export default PaginationComponent;
