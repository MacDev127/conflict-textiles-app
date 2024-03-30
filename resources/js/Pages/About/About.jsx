import React from "react";

const About = ({ textileDetails }) => {
    return (
        <div>
            <h1>About Page</h1>
            {textileDetails &&
                textileDetails.map((detail) => (
                    <div key={detail.id}>
                        <h2>{detail.title}</h2>
                        <h4>{detail.description}</h4>
                        <img src={detail.image} alt={detail.title} />
                        {/* Render additional details as needed */}
                    </div>
                ))}
        </div>
    );
};

export default About;
