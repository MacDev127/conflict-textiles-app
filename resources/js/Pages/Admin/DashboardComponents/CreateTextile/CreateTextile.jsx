import React, { useState, useRef } from "react";
import { useForm } from "@inertiajs/react";
import "./Createtextile.css";
import AlertComponent from "@/components/Alert/AlertComponent";

const CreateTextile = () => {
    const { data, setData, post, errors, reset } = useForm({
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

    const [alertMessage, setAlertMessage] = useState("");
    const [severity, setSeverity] = useState("success");
    const fileInputRef = useRef(null); // Create a ref for the file input

    const handleAlertClose = () => {
        setAlertMessage("");
    };
    // Event handler for changes in the input fields
    const handleInputChange = (e) => {
        const key = e.target.name; // Retrieve name attribute of the input element that triggered the event

        // Check input type is 'file' to handle file inputs differently from text inputs
        const value =
            e.target.type === "file"
                ? e.target.files[0] // If it's a file input, retrieve the first file from the files list
                : e.target.value; // If it's not a file, retrieve the string value from the input

        // Update the component's state with the new value for the field specified by 'key'
        setData(key, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission action (page reload)
        post(route("gallery-images.store"), {
            // Correct URL, no template literal or variable
            onSuccess: () => {
                reset();
                fileInputRef.current.value = "";

                setAlertMessage("Textile Added Successfully!");
                setSeverity("success");
            },
            onError: (errors) => {
                if (errors.image) {
                    setAlertMessage(errors.image);
                    setSeverity("error");
                }
                console.error(errors);
            },
        });
    };

    return (
        <>
            <section className="create-textile">
                <div className="form__wrapper">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="create-textile__title">
                            Create Textile
                        </div>

                        <div className="form-row">
                            <div className="col-1">
                                <label htmlFor="image">Image</label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    required
                                    onChange={handleInputChange}
                                    ref={fileInputRef} // Attach the ref to your file input
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

                                <div className="textarea__box">
                                    <label htmlFor="description">
                                        Description
                                    </label>

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
                            Create Textile
                        </button>
                    </form>
                </div>
                <div className="form__alert">
                    {alertMessage && (
                        <AlertComponent
                            variant="outlined"
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

export default CreateTextile;
