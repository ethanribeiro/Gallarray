import {useState, useEffect} from 'react';

import './Exhibit.css';

import Spinner from "../../components/Spinner";
import ExhibitList from './ExhibitList';
import NewItemForm from './NewItemForm';
import { getExhibit } from '../../utilities/exhibit-service';

export default function Exhibit(props){
    const [exhibit, setExhibit] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    async function handleRequest() {
        const exhibitResponse = await getExhibit();

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
            <ExhibitList exhibit={exhibit} />
        </>
    );
}