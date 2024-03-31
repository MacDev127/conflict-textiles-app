import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import ModalComponent from "@/components/Modal/ModalComponent";
import { router } from "@inertiajs/react";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import "./EditTextile.css";
import { Link } from "@inertiajs/react";

const EditTextile = ({ textileDetail }) => {
    const { data, setData, put } = useForm({
        ...textileDetail,
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const handleInputChange = (e) => {
        const key = e.target.name;
        const value =
            e.target.type === "file" ? e.target.files[0] : e.target.value;
        setData(key, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form", data);
        router.put(route("textileDetail.update", textileDetail.id), data, {
            preserveState: true,
            onSuccess: () => {
                setSuccessMessage("Textile Updated Successfully");
                setIsModalOpen(true);
            },
            onError: (errors) => {
                // Handle validation errors
                // Log errors or set state to display them
                console.error(errors);
            },
        });
    };

    return (
        <>
            <DashboardSidebar />

            <section className="create-textile">
                <div>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="create-textile__title">
                            Create textile
                        </div>
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
                                    value={data.title || ""}
                                    onChange={handleInputChange}
                                    placeholder="Enter textile title"
                                />

                                <label htmlFor="type">Type</label>
                                <input
                                    type="text"
                                    name="type"
                                    value={data.type || ""}
                                    onChange={handleInputChange}
                                    placeholder="Enter textile type"
                                />

                                <label htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={data.location || ""}
                                    onChange={handleInputChange}
                                    placeholder="Enter textile location"
                                />
                                <label htmlFor="photographer">
                                    Photographer
                                </label>

                                <input
                                    type="text"
                                    name="photographer"
                                    value={data.photographer || ""}
                                    onChange={handleInputChange}
                                    placeholder="Photographer"
                                />
                            </div>
                            <div className="col-2">
                                <label htmlFor="year_produced">
                                    Year Produced
                                </label>
                                <input
                                    type="text"
                                    name="year_produced"
                                    value={data.year_produced || ""}
                                    onChange={handleInputChange}
                                    placeholder="year produced"
                                />
                                <label htmlFor="size">Size</label>
                                <input
                                    type="text"
                                    name="size"
                                    value={data.size || ""}
                                    onChange={handleInputChange}
                                    placeholder="Size"
                                />
                                <label htmlFor="materials">Materials</label>
                                <input
                                    type="text"
                                    name="materials"
                                    value={data.materials || ""}
                                    onChange={handleInputChange}
                                    placeholder="Materials"
                                />

                                <label htmlFor="provenance">Provenance</label>
                                <input
                                    type="text"
                                    name="provenance"
                                    value={data.provenance || ""}
                                    onChange={handleInputChange}
                                    placeholder="provenance"
                                />
                                <div className="textarea__box">
                                    <label htmlFor="description">
                                        Description
                                    </label>

                                    <textarea
                                        className="textile-textarea"
                                        id="description"
                                        name="description"
                                        value={data.description || ""}
                                        onChange={handleInputChange}
                                        placeholder="Enter textile description"
                                        rows="6"
                                        cols="30"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="country_of_origin">
                                    Country of Origin
                                </label>
                                <input
                                    type="text"
                                    name="country_of_origin"
                                    value={data.country_of_origin || ""}
                                    onChange={handleInputChange}
                                    placeholder="Country of Origin"
                                />

                                <label htmlFor="authenticity">
                                    Authenticity
                                </label>
                                <input
                                    type="text"
                                    name="authenticity"
                                    value={data.authenticity || ""}
                                    onChange={handleInputChange}
                                    placeholder="Authenticity"
                                />

                                <label htmlFor="maker">Maker</label>
                                <input
                                    type="text"
                                    name="maker"
                                    value={data.maker || ""}
                                    onChange={handleInputChange}
                                    placeholder="Maker"
                                />
                                <label htmlFor="owner">Owner</label>

                                <input
                                    type="text"
                                    name="owner"
                                    value={data.owner || ""}
                                    onChange={handleInputChange}
                                    placeholder="Owner"
                                />
                            </div>
                        </div>

                        <button
                            className="create-textile__form-button"
                            type="submit"
                        >
                            Update textile
                        </button>
                    </form>
                </div>
                <ModalComponent
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                >
                    <div className="success__message">
                        <h2>{successMessage}</h2>
                        <h5 className="return__link">
                            <Link href={route("admin.textiles-dashboard")}>
                                Back to textiles
                            </Link>
                        </h5>
                    </div>
                </ModalComponent>
            </section>
        </>
    );
};

export default EditTextile;
