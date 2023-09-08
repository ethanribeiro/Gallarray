import {useState, useEffect} from 'react';
import NewItemForm from './NewItemForm';
import { getExhibit } from '../../utilities/exhibit-service';
import Spinner from "../../components/Spinner";

export default function New(props){
    const [exhibit, setExhibit] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    async function handleRequest() {
        const exhibitResponse = await getExhibit();
        console.log(exhibitResponse)

        if (exhibitResponse.length){
            setExhibit(exhibitResponse);
            setIsLoading(false);
        } else {
            console.log(exhibitResponse);
        }
    }

    useEffect(() => {
        handleRequest();
    }, []);

    return isLoading ? (
        <Spinner /> 
        ) : (
        <>
            <NewItemForm updateExhibit={handleRequest}/>
        </>
    );
}