import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TitleComponent from "@/components/Title/TitleComponent";
import ContainerComponent from "@/components/Container/ContainerComponent";
import TextComponent from "@/components/Text/TextComponent";
import ContentComponent from "@/components/Content/ContentComponent";
import AlertComponent from "@/components/Alert/AlertComponent";
import BreadcrumbComponent from "@/components/Breadcrumbs/BreadcrumbComponent";
import "./Contact.css";

const Contact = ({ authUser, type, auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    //Alert
    const [alertMessage, setAlertMessage] = useState("");
    const [severity, setSeverity] = useState("success");

    const handleAlertClose = () => {
        setAlertMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/contact", {
            preserveScroll: true,

            onSuccess: () => {
                reset();
                setAlertMessage("Message sent successfully!");
                setSeverity("success");
            },
            onError: (errors) => {
                console.log(errors);
                alert("Failed to send the message.");
            },
        });
    };

    return (
        <>
            <Navbar authUser={authUser} auth={auth} />

            <section className="Contact">
                <BreadcrumbComponent
                    type={type}
                    breadcrumbs={[
                        { label: "Home", href: "/" },

                        { label: "Contact Us", href: "" },
                    ]}
                />
                <ContainerComponent>
                    <TitleComponent>Contact Us</TitleComponent>
                    <ContentComponent>
                        <TextComponent>
                            Got a question or need to reach out to a member of
                            our Conflict Textile team? Fill out the enquiry
                            contact form below, and one of our friendly team
                            members will get back to you as soon as possible.
                        </TextComponent>
                    </ContentComponent>

                    <div className="contact__form-container">
                        <div className="contact__form-row">
                            <form onSubmit={handleSubmit}>
                                <h2 className="contact__form-title">
                                    Get in Touch
                                </h2>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />

                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={data.subject}
                                    onChange={(e) =>
                                        setData("subject", e.target.value)
                                    }
                                />
                                <label htmlFor="message">Message</label>
                                <textarea
                                    className="textarea"
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    rows="6"
                                    cols="30"
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                ></textarea>
                                <button
                                    className="contact__form-button"
                                    type="submit"
                                    disabled={processing}
                                >
                                    Submit
                                </button>
                            </form>
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
                        </div>
                    </div>
                </ContainerComponent>

                <Footer />
            </section>
        </>
    );
};

export default Contact;
