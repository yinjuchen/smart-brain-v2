// import './image-link-form.styles.scss';
// import { useState } from 'react';
// import Clarifai from 'clarifai';
// import { useEffect } from 'react';


// const app = new Clarifai.App({
//   apiKey: '8d9ba79831084865ab5294cd46e3942e'
// })

// const ImageLinkForm = () => {
//     useEffect(() => {
//     window.process = {
//       ...window.process,
//     };
//   }, []);
 
//   const [searchField, setSearchfield] = useState('')


//   const onInputChange = (event) => {
//     console.log(event)
//   }

//   const onButtonSubmit = () => {

//     console.log('click')
 
//     app.models
//     .predict(
//     '8d9ba79831084865ab5294cd46e3942e',
//     'https://samples.clarifai.com/face-det.jpg')
//     .then(
//       function(response) {
//         console.log(response)

//       }, 
//       function(error) {

//       }
//     )
//   }

//   return(
//     <div className="image-link-form-container">
//       <p className="image-link-form-text">
//         This Magic will detect feaces in your picture, git it a try. 
//       </p>
//        <div className="input-container">
//         <input onChange={onInputChange} className="input-text" type="text" />
//         <button onClick={onButtonSubmit} className="input-text-button" >Detect</button>
//       </div>
//     </div>
//   )
// }

// export default ImageLinkForm