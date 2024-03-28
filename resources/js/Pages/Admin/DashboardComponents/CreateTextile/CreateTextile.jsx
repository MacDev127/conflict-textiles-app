// In your resources/js/Pages/Admin/Textiles/CreateTextile.jsx

import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import "./Createtextile.css";
// import ModalComponent from "@/components/Modal/ModalComponent";

import { Link } from "@inertiajs/react";

const CreateTextile = () => {
    const { data, setData, post, reset } = useForm({
        image: null,
        location: "",
        title: "",
        type: "",
        description: "",
        year_produced: "",
        size: "",
        materials: "",
        provenance: "",
        country_of_origin: "",
        authenticity: "",
        maker: "",
        owner: "",
        photographer: "",
    });

    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [successMessage, setSuccessMessage] = useState("");
    const handleInputChange = (e) => {
        const key = e.target.name;
        const value =
            e.target.type === "file" ? e.target.files[0] : e.target.value;
        setData(key, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission action (page reload)
        post("/admin/textiles/store", {
            // Correct URL, no template literal or variable
            onSuccess: () => {
                reset(); // Reset the fields, or you can specify which fields to reset
                setSuccessMessage("Textile Added");
                setIsModalOpen(true);
            },
            onError: (errors) => {
                // Handle validation errors
                // Log errors or set state to display them
            },
        });
    };

    return (
        <>
            {/* <DashboardSidebar /> */}
            <section className="create-textile">
                <div
                // className={`create-textile__form-container ${
                //     isVisible ? "open" : ""
                // }`}
                >
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
                            </div>
                            <div className="col-2">
                                <label htmlFor="year_produced">
                                    Year Produced
                                </label>
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

                                <label htmlFor="authenticity">
                                    Authenticity
                                </label>
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
                                <label htmlFor="owner">Owner</label>

                                <input
                                    type="text"
                                    name="owner"
                                    value={data.owner}
                                    onChange={handleInputChange}
                                    placeholder="Owner"
                                />
                                <label htmlFor="photographer">
                                    Photographer
                                </label>

                                <input
                                    type="text"
                                    name="photographer"
                                    value={data.photographer}
                                    onChange={handleInputChange}
                                    placeholder="Photographer"
                                />
                            </div>
                        </div>

                        <label htmlFor="description">Description</label>
                        <textarea
                            className="textarea"
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={handleInputChange}
                            placeholder="Enter textile description"
                            rows="6"
                            cols="30"
                        ></textarea>

                        <button
                            className="create-textile__form-button"
                            type="submit"
                        >
                            Add textile
                        </button>
                    </form>
                </div>
                {/* <ModalComponent
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                >
                    <div className="success__message">
                        <h2>{successMessage}</h2>
                        <h5 className="return__link">
                            <Link href={route("textiles")}>
                                Back to textiles
                            </Link>
                        </h5>
                    </div>
                </ModalComponent> */}
            </section>
        </>
    );
};

export default CreateTextile;
