// import { useState } from 'react';
// import { createItem } from "../../utilities/exhibit-service";

// import "./NewItemForm.css";
// import { useAuth0 } from '@auth0/auth0-react';


// export default function NewItemForm({updateExhibit}) {
//     const {user, isLoading, isAuthenticated } = useAuth0();

//     const initState = {
//         image: "",
//         title: "",
//         categories: "",
//         price: 0,
//         artist: "",
//         user: user?.sub,
//     };

//     const [newForm, setNewForm] = useState(initState);
    
//     async function handleSubmit(e){
//         e.preventDefault();
//         const dataToSend = {...newForm, user: user.sub}
//         await createItem(dataToSend);
//         updateExhibit();
//         setNewForm(initState)
//     }

//     function handleChange(e){
//         const updatedData = { ...newForm, [e.target.name]: e.target.value }
//         setNewForm(updatedData);
//     }

//     return isAuthenticated && !isLoading ? (
//         <section className='NewItemForm-section'>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor='image'>
//                     Exhibit Image:
//                     <input type='text' name="image" id="image" value={newForm.image} onChange={handleChange} placeholder='Uplaod Image For Your Exhibit' />
//                 </label>
//                 <label htmlFor='title'>
//                     Exhibit Title:
//                     <input type='text' name="title" id="title" placeholder='Enter Title' value={newForm.title} onChange={handleChange} required/>
//                 </label>
//                 <label htmlFor='categories'>
//                     Categories:
//                     <input type='text' name="categories" id="categories" value={newForm.categories} onChange={handleChange} placeholder='Enter Categories'/>
//                 </label>
//                 <label htmlFor='price'>
//                     Price:
//                     <input type='number' name="price" id="price" value={newForm.price} onChange={handleChange} placeholder='Enter Price'/>
//                 </label>
//                 <label htmlFor='artist'>
//                     Artist:
//                     <input type='text' name="artist" id="artist" value={newForm.artist} onChange={handleChange} placeholder='Enter Name Of Artist'/>
//                 </label>
//                 <input type='submit' value="Create Item" />
//             </form>
//         </section>
//     ): null
// }