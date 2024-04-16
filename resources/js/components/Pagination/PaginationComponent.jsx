import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { router } from "@inertiajs/react";

const PaginationComponent = ({ total, current, onChange }) => {
    // Handles page change events
    const handleChange = (value) => {
        onChange(value); // Propagate up or use Inertia to navigate
        router.visit(
            `/events?page=${value}`,
            { preserveState: true },
            { preserveScroll: true }
        );
        // Preserve scroll stops scroll to top of homepage
    };

    return (
        <Stack sx={{ marginTop: "50px" }} spacing={2}>
            <Pagination
                sx={{ marginLeft: "10px" }}
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
