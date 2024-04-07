import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Profile() {
    let navigate = useNavigate();//usehistory-s nacvlad es aris
    let { username } = useParams();
    return (
        <div>
            this is the profile page for {username}
            <button onClick={()=>{navigate("/about")}}>go to about page</button>
        </div>
    )
}
