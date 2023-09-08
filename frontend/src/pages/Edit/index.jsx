import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { getItem } from '../../utilities/exhibit-service';

import Spinner from "../../components/Spinner";
import EditItemForm from './EditItemForm';
import "./Edit.css";

export default function Edit(props){
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState(null);
    
    const {id} = useParams();
    const navigate = useNavigate();

    async function handleRequest() {
        try {
            const itemData = await getItem(id);
            if(itemData._id){
                setItem(itemData);
                setIsLoading(false);
            } else {
                console.log("edit page", itemData);
                throw Error('Something went wrong!');
            }
        } catch (error) {
            console.log(error)
            navigate(`/exhibit/${id}`);
        }
    }

    useEffect(() => {
        handleRequest();
    }, []);

    if(isLoading){
        return <Spinner />
    }
    return(<EditItemForm initialData={item} />)
}
