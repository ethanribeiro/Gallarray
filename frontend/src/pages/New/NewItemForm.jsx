import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createItem } from "../../utilities/exhibit-service";

import "./NewItemForm.css";
import { useAuth0 } from '@auth0/auth0-react';

// Cloudinary image manipulation source: https://medium.com/@aalam-info-solutions-llp/how-to-upload-images-to-cloudinary-with-react-js-ad402f775818

export default function NewItemForm({updateExhibit}) {
    const navigate = useNavigate()
    const {user, isLoading, isAuthenticated } = useAuth0();

    const initState = {
        image: "",
        title: "",
        categories: "",
        price: 0,
        artist: "",
        user: user?.sub,
    };

    // const [previewSource, setPreviewSource] = useState(null);
    const [newForm, setNewForm] = useState(initState);
    // const [formData, setfromData] = useState();

    // function handleFileInputChange(e) {
    //     const file = e.target.files[0];
    //     setPreviewFile(file);
    //     console.log(setPreviewFile)
    // }

    // function setPreviewFile(file) {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {
    //         setPreviewSource(reader.result);
    //     };
    // }

    async function handleSubmit(e){
        e.preventDefault();
        const dataToSend = {...newForm, user: user.sub}
        await createItem(dataToSend);
        console.log(dataToSend);
        updateExhibit();
        setNewForm(initState);
        navigate('/');
    }

    function handleChange(e){
        // console.log(e.target.files)
        const formData = new FormData();
        const updatedData = { ...newForm, [e.target.name]: e.target.value }
        const file = e.target.files[0];
        setfromData({ ...formData, image: file });
        setNewForm(updatedData);
    }

    return isAuthenticated && !isLoading ? (
        <section className='NewItemForm-section'>
            <form 
                onSubmit={handleSubmit} 
                autocomplete="off"
                encType='multipart/form-data'
            >
                <label htmlFor='image'>
                    Exhibit Image:
                    <input type='file' name="image" id="image" value={newForm.image} onChange={handleChange}/>
                </label>
                {/* {previewSource && (
                    <img src={previewSource} alt="chosen" style={{ height: '300px' }} />
                )} */}
                <label htmlFor='title'>
                    Exhibit Title:
                    <input type='text' name="title" id="title" placeholder='Enter Title' value={newForm.title} onChange={handleChange} required/>
                </label>
                <label htmlFor='categories'>
                    Categories:
                    <input type='text' name="categories" id="categories" value={newForm.categories} onChange={handleChange} placeholder='Enter Categories'/>
                </label>
                <label htmlFor='price'>
                    Price:
                    <input type='number' name="price" id="price" value={newForm.price} onChange={handleChange} placeholder='Enter Price'/>
                </label>
                <label htmlFor='artist'>
                    Artist:
                    <input type='text' name="artist" id="artist" value={newForm.artist} onChange={handleChange} placeholder='Enter Name Of Artist'/>
                </label>
                <input type='submit' value="Create Item" />
            </form>
        </section>
    ) : null;
}