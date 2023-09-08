import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { updateItem } from '../../utilities/exhibit-service';

import "./EditItemForm.css";

export default function EditItemForm({ initialData }) {
    const {id} = useParams()
    const navigate = useNavigate()
    const defaultState = initialData
        ? { ...initialData }
        : { image: "", title: "", categories: "", price: 0, artist: "" };

    const [formData, setFormData] = useState(defaultState);

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('sending data', formData);

        const {image, title, categories, price, artist} = formData
        const updatedData = {image, title, categories, price, artist}

        try {
            const updateResponse = await updateItem(id, updatedData)
            console.log(updateResponse)
            navigate(`/exhibit/${id}`)
        } catch (err) {
            navigate(`/`)
        }
    }

    function handleChange(e) {
        const updatedData = { ...formData, [e.target.name]: e.target.value };
        setFormData(updatedData);
    }

    return (
        <section>
            <h2>Edit Exhibit:</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='image'>
                    Exhibit Image:
                    <input type='text' name="image" id="image" placeholder='Uplaod Image For Your Exhibit' value={formData.image} onChange={handleChange} required />
                </label>
                <label htmlFor='title'>
                    Exhibit Title:
                    <input type='text' name="title" id="title" value={formData.title} onChange={handleChange} placeholder='Enter Title' />
                </label>
                <label htmlFor='categories'>
                    Categories:
                    <input type='text' name="categories" id="categories" value={formData.categories} onChange={handleChange} placeholder='Enter Categories' />
                </label>
                <label htmlFor='price'>
                    Price:
                    <input type='number' name="price" id="price" value={formData.price} onChange={handleChange} placeholder='Enter Price' />
                </label>
                <label htmlFor='artist'>
                    Artist:
                    <input type='text' name="artist" id="artist" value={formData.artist} onChange={handleChange} placeholder='Enter Name Of Artist' />
                </label>
                <input type='submit' value="Update Item" />
            </form>
        </section>
    )
}