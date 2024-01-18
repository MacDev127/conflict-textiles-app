import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Accordian from "@/components/Accordian/Accordian";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import "./TextileDetails.css";

const TextileDetail = ({ textileDetail }) => {
    return (
        <>
            <Navbar />
            <div className="td__container">
                <section className="td__image">
                    <div className="td__image-container">
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
                    </div>
                </section>
                <section className="td__item">
                    <div key={textileDetail.id} className="td__item-title">
                        <h1>{textileDetail.title}</h1>
                        <h4>Amazing Subtitle</h4>
                    </div>

                    <div className="td__item-intro">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Est quis libero placeat voluptas unde, cum et
                            animi numquam similique? Iure incidunt, ipsum
                            laudantium voluptate odio, consectetur, perferendis
                            quo temporibus corrupti quis vero. Ullam, illo?
                            Veritatis nulla ipsum minima ducimus dolor.
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
                                        Date:
                                    </label>
                                    <span className="td__item-info-value">
                                        {textileDetail.date}
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
                </section>
            </div>

            <Footer />
        </>
    );
};

export default TextileDetail;

// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
// import Accordian from "@/components/Accordian/Accordian";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// import "./TextileDetails.css";

// const TextileDetails = ({ textileDetails }) => {
//     return (
//         <>
//             <Navbar />
//             <div className="td__container">
//                 <section className="td__image">
//                     <div className="td__image-container">
//                         <div className="modalImage">
//                             <TransformWrapper
//                                 defaultScale={1}
//                                 defaultPositionX={100}
//                                 defaultPositiony={200}
//                             >
//                                 <TransformComponent>
//                                     <img
//                                         src="/images/img12.jpg"
//                                         alt="Enlarged View"
//                                     />
//                                 </TransformComponent>
//                             </TransformWrapper>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="td__item">
//                     {textileDetails.map((detail) => (
//                         <div key={detail.id} className="td__item-title">
//                             <h1>{detail.title}</h1>
//                             <h4>Amazing Subtitle</h4>
//                         </div>
//                     ))}

//                     <div className="td__item-intro">
//                         <p>
//                             Lorem ipsum dolor sit, amet consectetur adipisicing
//                             elit. Est quis libero placeat voluptas unde, cum et
//                             animi numquam similique? Iure incidunt, ipsum
//                             laudantium voluptate odio, consectetur, perferendis
//                             quo temporibus corrupti quis vero. Ullam, illo?
//                             Veritatis nulla ipsum minima ducimus dolor.
//                         </p>
//                     </div>
//                     <div className="td__item-info">
//                         <ul>
//                             {textileDetails.map((detail) => (
//                                 <div key={detail.id}>
//                                     <li>
//                                         <label className="td__item-info-title">
//                                             Maker:
//                                         </label>
//                                         <span className="td__item-info-value">
//                                             {detail.maker}
//                                         </span>
//                                     </li>
//                                     <li>
//                                         <label className="td__item-info-title">
//                                             Country of Origin:
//                                         </label>
//                                         <span className="td__item-info-value">
//                                             {detail.country_of_origin}{" "}
//                                         </span>
//                                     </li>
//                                     <li>
//                                         <label className="td__item-info-title">
//                                             Date:
//                                         </label>
//                                         <span className="td__item-info-value">
//                                             {detail.date}
//                                         </span>
//                                     </li>
//                                     <li>
//                                         <label className="td__item-info-title">
//                                             Size:
//                                         </label>
//                                         <span className="td__item-info-value">
//                                             {detail.size}
//                                         </span>
//                                     </li>
//                                     <li>
//                                         <label className="td__item-info-title">
//                                             Materials:
//                                         </label>
//                                         <span className="td__item-info-value">
//                                             {detail.materials}
//                                         </span>
//                                     </li>
//                                     <li>
//                                         <label className="td__item-info-title">
//                                             Owner:
//                                         </label>
//                                         <span className="td__item-info-value">
//                                             {detail.owner}
//                                         </span>
//                                     </li>
//                                     <li>
//                                         <label className="td__item-info-title">
//                                             Provenance:
//                                         </label>
//                                         <span className="td__item-info-value">
//                                             {detail.provenance}
//                                         </span>
//                                     </li>
//                                     <li>
//                                         <label className="td__item-info-title">
//                                             Authenticity:
//                                         </label>
//                                         <span className="td__item-info-value">
//                                             {detail.authenticity}
//                                         </span>
//                                     </li>
//                                     <li>
//                                         <label className="td__item-info-title">
//                                             Photographer:
//                                         </label>
//                                         <span className="td__item-info-value">
//                                             {detail.photographer}
//                                         </span>
//                                     </li>
//                                     <li>
//                                         <label className="td__item-info-title">
//                                             Type:
//                                         </label>
//                                         <span className="td__item-info-value">
//                                             {detail.type}
//                                         </span>
//                                     </li>
//                                     <li>
//                                         <label className="td__item-info-title">
//                                             Location:
//                                         </label>
//                                         <span className="td__item-info-value">
//                                             {detail.location}
//                                         </span>
//                                     </li>
//                                 </div>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="td__item-card">
//                         <Accordian textileDetails={textileDetails} />
//                     </div>
//                 </section>
//             </div>

//             <Footer />
//         </>
//     );
// };

// export default TextileDetails;
