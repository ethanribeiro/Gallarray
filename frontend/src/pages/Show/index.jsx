import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { getItem, deleteItem } from '../../utilities/exhibit-service';
import Spinner from "../../components/Spinner";
import "./Show.css";

export default function Show(props){
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState(null);
    
    const navigate = useNavigate();
    const {id} = useParams();

    async function handleRequest() {
        const itemResponse = await getItem(id);
            
        if(itemResponse?._id){
            setItem(itemResponse);
            setIsLoading(false);
        } else {
            console.log("update context with error data or redirect to error");
            console.log(itemResponse);
            navigate('/');
        }
    }

    async function handleDelete(){
        try {
            const deleteResponse = await deleteItem(id)

            if(deleteResponse._id){
                console.log('redirecting');
            } else {
                throw Error('API error');
            }
            navigate('/');

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleRequest();
    }, []);
    
    return isLoading ? (
        <Spinner />
    ) : (
        <>
            <section className='Item'>
                <img src={item.image} alt={`${item.title} by ${item.artist}`} />
                <h2>{item.title}</h2>
                <h4>By {item.artist}</h4>
                <h5>{item.categories}</h5>
                <h3>{item.price}</h3>
                <p>{item.createdAt}</p>
                <h6>Exhibit: {item._id}</h6>
                <div>
                    <button className='delete' onClick={handleDelete}>Remove Exhibit</button>
                    <Link className='edit' to={`/exhibit/${item._id}/edit`}>Edit Exhibit</Link>
                </div>
            </section>
        </>
    );
}