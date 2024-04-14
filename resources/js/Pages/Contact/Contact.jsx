import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TitleComponent from "@/components/Title/TitleComponent";
import ContainerComponent from "@/components/Container/ContainerComponent";
import TextComponent from "@/components/Text/TextComponent";
import "./Contact.css";

const Contact = () => {
    return (
        <>
            <Navbar />

            <section className="Contact">
                <ContainerComponent>
                    <TitleComponent>Contact Us</TitleComponent>
                    <TextComponent>
                        Got a question or need to reach out to a member of our
                        Conflict Textile team? Fill out the enquiry contact form
                        below, and one of our friendly team members will get
                        back to you as soon as possible. We're here to help and
                        eager to assist you with any inquiries you may have
                    </TextComponent>
                    <div className="contact__form-container">
                        <div class="contact__form-contact">
                            <h3>Email us</h3>
                            <form>
                                <p>
                                    <label>Name</label>
                                    <input type="text" name="name" />
                                </p>
                                <p>
                                    <label>Company</label>
                                    <input type="text" name="company" />
                                </p>
                                <p>
                                    <label>Email Address</label>
                                    <input type="email" name="email" />
                                </p>
                                <p>
                                    <label>Subject</label>
                                    <input type="text" name="subject" />
                                </p>
                                <p class="full">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                    ></textarea>
                                </p>

                                <p class="full">
                                    <button>Submit</button>
                                </p>
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
