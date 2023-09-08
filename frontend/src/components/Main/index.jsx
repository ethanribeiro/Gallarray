import {Routes, Route} from 'react-router-dom';
import Exhibit from '../../pages/Exhibit';
import Show from '../../pages/Show';
import _404 from '../../pages/Error';
import Edit from '../../pages/Edit';
import New from '../../pages/New';
import Profile from '../../pages/Profile';

export default function Main(props){
    return(
        <main className='container'>
            <Routes>
                <Route path="/" element={<Exhibit/>} />
                <Route path="/exhibit/:id" element={<Show/>}/>
                <Route path="/exhibit/:id/edit" element={<Edit/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/*" element={<_404/>}/>
            </Routes>
        </main>
    );
}