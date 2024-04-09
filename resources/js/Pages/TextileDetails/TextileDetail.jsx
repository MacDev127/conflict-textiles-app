import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Accordian from "@/components/Accordian/Accordian";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import "./TextileDetails.css";

const TextileDetail = ({ textileDetail }) => {
    return (
        <>
            <Navbar />
            <section className="textile__details">
                <div className="td__container">
                    <div className="modalImage">
                        <TransformWrapper
                            defaultScale={1}
                            defaultPositionX={100}
                            defaultPositiony={200}
                        >
                            <TransformComponent>
                                <img
                                    src={textileDetail.image}
                                    alt="Enlarged View"
                                />
                            </TransformComponent>
                        </TransformWrapper>
                    </div>
                    <div className="td__item">
                        <div className="td__item-title-wrapper">
                            <div
                                key={textileDetail.id}
                                className="td__item-title"
                            >
                                <h1>{textileDetail.title}</h1>
                                <h4>Amazing Subtitle</h4>
                            </div>
                        </div>

                        <div className="td__item-intro">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Est quis libero placeat
                                voluptas unde, cum et animi numquam similique?
                                Iure incidunt, ipsum laudantium voluptate odio,
                                consectetur, perferendis quo temporibus corrupti
                                quis vero. Ullam, illo? Veritatis nulla ipsum
                                minima ducimus dolor.
                            </p>
                        </div>
                        <div className="td__item-info">
                            <ul>
                                <div key={textileDetail.id}>
                                    <li>
                                        <label className="td__item-info-title">
                                            Maker:
                                        </label>
                                        <span className="td__item-info-value">
                                            {textileDetail.maker}
                                        </span>
                                    </li>
                                    <li>
                                        <label className="td__item-info-title">
                                            Country of Origin:
                                        </label>
                                        <span className="td__item-info-value">
                                            {textileDetail.country_of_origin}{" "}
                                        </span>
                                    </li>
                                    <li>
                                        <label className="td__item-info-title">
                                            Year Produced:
                                        </label>
                                        <span className="td__item-info-value">
                                            {textileDetail.year_produced}
                                        </span>
                                    </li>
                                    <li>
                                        <label className="td__item-info-title">
                                            Size:
                                        </label>
                                        <span className="td__item-info-value">
                                            {textileDetail.size}
                                        </span>
                                    </li>
                                    <li>
                                        <label className="td__item-info-title">
                                            Materials:
                                        </label>
                                        <span className="td__item-info-value">
                                            {textileDetail.materials}
                                        </span>
                                    </li>
                                    <li>
                                        <label className="td__item-info-title">
                                            Owner:
                                        </label>
                                        <span className="td__item-info-value">
                                            {textileDetail.owner}
                                        </span>
                                    </li>
                                    <li>
                                        <label className="td__item-info-title">
                                            Provenance:
                                        </label>
                                        <span className="td__item-info-value">
                                            {textileDetail.provenance}
                                        </span>
                                    </li>
                                    <li>
                                        <label className="td__item-info-title">
                                            Authenticity:
                                        </label>
                                        <span className="td__item-info-value">
                                            {textileDetail.authenticity}
                                        </span>
                                    </li>
                                    <li>
                                        <label className="td__item-info-title">
                                            Photographer:
                                        </label>
                                        <span className="td__item-info-value">
                                            {textileDetail.photographer}
                                        </span>
                                    </li>
                                    <li>
                                        <label className="td__item-info-title">
                                            Type:
                                        </label>
                                        <span className="td__item-info-value">
                                            {textileDetail.type}
                                        </span>
                                    </li>
                                    <li>
                                        <label className="td__item-info-title">
                                            Location:
                                        </label>
                                        <span className="td__item-info-value">
                                            {textileDetail.location}
                                        </span>
                                    </li>
                                </div>
                            </ul>
                        </div>
                        <div className="td__item-card">
                            <Accordian textileDetail={textileDetail} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default TextileDetail;
