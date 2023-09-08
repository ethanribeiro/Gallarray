import {Link} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Auth/LoginButton';
import LogoutButton from '../Auth/LogoutButton';
import './MainNav.css';

export default function MainNav(props){
    const {isLoading, isAuthenticated} = useAuth0()
    return (
        <nav className='MainNav'>
            <Link to="/">
                <div>Welcome to Gallarray!</div>
            </Link>
            {!isLoading ? (<>
                <div>
                    { isAuthenticated ? (
                        <>
                            <Link className="Link" to="/new">Add Exhibit</Link>
                            <Link to="/profile">Artist Profile</Link> <LogoutButton />
                        </>
                    ) : (
                        <LoginButton />
                    )}
                </div>
            </>) : null}
        </nav>
    );
}