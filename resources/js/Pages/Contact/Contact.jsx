import React from "react";
import { useForm } from "@inertiajs/react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TitleComponent from "@/components/Title/TitleComponent";
import ContainerComponent from "@/components/Container/ContainerComponent";
import TextComponent from "@/components/Text/TextComponent";
import ContentComponent from "@/components/Content/ContentComponent";
import AlertComponent from "@/components/Alert/AlertComponent";
import "./Contact.css";

const Contact = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/contact", {
            onSuccess: () => {
                alert(
                    "Message sent successfully! You will receive a confirmation email shortly."
                );
                setData({ name: "", email: "", subject: "", message: "" }); // Reset form
            },
            onError: (errors) => {
                console.log(errors);
                alert("Failed to send the message.");
            },
        });
    };

    return (
        <>
            <Navbar />

            <section className="Contact">
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
                        </div>
                    </div>
                </ContainerComponent>

                <Footer />
            </section>
        </>
    );
};

export default Contact;
