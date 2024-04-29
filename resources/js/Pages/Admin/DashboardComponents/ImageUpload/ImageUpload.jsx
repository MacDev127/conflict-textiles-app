// import React from "react";
// import { useForm } from "@inertiajs/react";
// import "./ImageUpload.css";

// const ImageUpload = () => {
//     const { data, setData, post } = useForm({
//         image: null,
//         title: "",
//         type: "",
//         maker: "",
//         year_produced: "",
//         country_of_origin: "",
//     });

//     // const handleImageChange = (event) => {
//     //     setData("image", event.target.files[0]);
//     // };

//     const handleInputChange = (e) => {
//         const key = e.target.name;
//         const value =
//             e.target.type === "file" ? e.target.files[0] : e.target.value;
//         setData(key, value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         post(route("gallery-images.store"), {
//             // Optionally handle progress updates
//             onProgress: (progressEvent) => {
//                 const percentage =
//                     (progressEvent.loaded / progressEvent.total) * 100;
//                 console.log(percentage);
//             },
//         });
//     };

//     return (
//         <>
//             <h2>Add Image</h2>
//             <form onSubmit={handleSubmit} encType="multipart/form-data">
//                 <label htmlFor="image">Image</label>
//                 <input
//                     type="file"
//                     id="image"
//                     name="image"
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <label htmlFor="title">Title</label>
//                 <input
//                     type="text"
//                     id="title"
//                     name="title"
//                     value={data.title || ""}
//                     onChange={handleInputChange}
//                     placeholder="Enter Title"
//                 />
//                 <label htmlFor="type">Type</label>
//                 <input
//                     type="text"
//                     name="type"
//                     value={data.type || ""}
//                     onChange={handleInputChange}
//                     placeholder="Enter event type"
//                 />
//                 <label htmlFor="maker">Maker</label>
//                 <input
//                     type="text"
//                     name="maker"
//                     value={data.maker || ""}
//                     onChange={handleInputChange}
//                     placeholder="Enter Maker"
//                 />
//                 <label htmlFor="country_of_origin">Country of Origin</label>
//                 <input
//                     type="text"
//                     name="country_of_origin"
//                     value={data.country_of_origin || ""}
//                     onChange={handleInputChange}
//                     placeholder="Country of Origin"
//                 />
//                 <label htmlFor="year produced">Year Produced</label>
//                 <input
//                     type="text"
//                     name="year_produced"
//                     value={data.year_produced || ""}
//                     onChange={handleInputChange}
//                     placeholder="Year Produced"
//                 />
//                 <button type="submit">Upload Image</button>
//             </form>
//         </>
//     );
// };

// export default ImageUpload;
