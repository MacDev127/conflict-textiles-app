import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { router } from "@inertiajs/react";
import "./BreadcrumbComponent.css";

const BreadcrumbComponent = ({ breadcrumbs }) => {
    const handleClick = (event, href) => {
        e.preventDefault();
        router.visit(href);
    };
    return (
        <div className="breadcrumbs" role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
                {breadcrumbs.map((crumb, index) => (
                    <Link
                        key={index}
                        underline="hover"
                        color={
                            index === breadcrumbs.length - 1
                                ? "text.primary"
                                : "inherit"
                        }
                        href={crumb.href}
                        onClick={(event) => handleClick(event, crumb.href)}
                        aria-current={
                            index === breadcrumbs.length - 1
                                ? "page"
                                : undefined
                        }
                    >
                        {crumb.label}
                    </Link>
                ))}
            </Breadcrumbs>
        </div>
    );
};

export default BreadcrumbComponent;
