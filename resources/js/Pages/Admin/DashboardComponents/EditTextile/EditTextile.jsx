import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import "./EditTextile.css";
import AlertComponent from "@/components/Alert/AlertComponent";
import BreadcrumbComponent from "@/components/Breadcrumbs/BreadcrumbComponent";

const EditTextile = ({ galleryImage }) => {
    const { data, setData, put } = useForm({
        ...galleryImage,
    });

    const [alertMessage, setAlertMessage] = useState("");
    const [severity, setSeverity] = useState("success");

    const handleAlertClose = () => {
        setAlertMessage("");
    };

    const handleInputChange = (e) => {
        const key = e.target.name;
        const value =
            e.target.type === "file" ? e.target.files[0] : e.target.value;
        setData(key, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(route("textileDetail.update", galleryImage.id), data, {
            preserveState: true,
            onSuccess: () => {
                setAlertMessage("Textile Updated Successfully!");
                setSeverity("success");
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    return (
        <>
            <DashboardSidebar />
            <BreadcrumbComponent
                className="crumbs"
                breadcrumbs={[
                    { label: "Dashboard", href: "/textiles-dashboard" },
                    {
                        label: "Edit Textile",
                        href: "",
                    },
                ]}
            />

            <section className="edit-textile">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="create-textile__title">Edit Textile</div>

                    <div className="form-row">
                        <div className="col-1">
                            <label htmlFor="image">Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={handleInputChange}
                            />

                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={data.title}
                                onChange={handleInputChange}
                                placeholder="Enter textile title"
                            />

                            <label htmlFor="type">Type</label>
                            <input
                                type="text"
                                name="type"
                                value={data.type}
                                onChange={handleInputChange}
                                placeholder="Enter textile type"
                            />

                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={data.location}
                                onChange={handleInputChange}
                                placeholder="Enter textile location"
                            />
                            <label htmlFor="photographer">Photographer</label>

                            <input
                                type="text"
                                name="photographer"
                                value={data.photographer}
                                onChange={handleInputChange}
                                placeholder="Photographer"
                            />
                        </div>
                        <div className="col-2">
                            <label htmlFor="year_produced">Year Produced</label>
                            <input
                                type="text"
                                name="year_produced"
                                value={data.year_produced}
                                onChange={handleInputChange}
                                placeholder="year produced"
                            />
                            <label htmlFor="size">Size</label>
                            <input
                                type="text"
                                name="size"
                                value={data.size}
                                onChange={handleInputChange}
                                placeholder="Size"
                            />
                            <label htmlFor="materials">Materials</label>
                            <input
                                type="text"
                                name="materials"
                                value={data.materials}
                                onChange={handleInputChange}
                                placeholder="Materials"
                            />

                            <label htmlFor="provenance">Provenance</label>
                            <input
                                type="text"
                                name="provenance"
                                value={data.provenance}
                                onChange={handleInputChange}
                                placeholder="provenance"
                            />
                            <label htmlFor="owner">Owner</label>

                            <input
                                type="text"
                                name="owner"
                                value={data.owner}
                                onChange={handleInputChange}
                                placeholder="Owner"
                            />
                        </div>
                        <div className="col-3">
                            <label htmlFor="country_of_origin">
                                Country of Origin
                            </label>
                            <input
                                type="text"
                                name="country_of_origin"
                                value={data.country_of_origin}
                                onChange={handleInputChange}
                                placeholder="Country of Origin"
                            />

                            <label htmlFor="authenticity">Authenticity</label>
                            <input
                                type="text"
                                name="authenticity"
                                value={data.authenticity}
                                onChange={handleInputChange}
                                placeholder="Authenticity"
                            />

                            <label htmlFor="maker">Maker</label>
                            <input
                                type="text"
                                name="maker"
                                value={data.maker}
                                onChange={handleInputChange}
                                placeholder="Maker"
                            />

                            <div className="textarea__box">
                                <label htmlFor="description">Description</label>

                                <textarea
                                    className="textile-textarea"
                                    id="description"
                                    name="description"
                                    value={data.description}
                                    onChange={handleInputChange}
                                    placeholder="Enter textile description"
                                    rows="8"
                                    cols="30"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <button
                        className="create-textile__form-button"
                        type="submit"
                    >
                        Add textile
                    </button>
                </form>
                <div className="form__alert">
                    {alertMessage && (
                        <AlertComponent
                            severity={severity}
                            closeHandler={handleAlertClose}
                        >
                            {alertMessage}
                        </AlertComponent>
                    )}
                </div>
            </section>
        </>
    );
};

export default EditTextile;
