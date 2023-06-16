import React from 'react';
import pic1 from '../assets/img/lovely-baby.jpg';
import { Twitter, Facebook, Instagram } from "react-bootstrap-icons";

const Profile = () => {
    return (
        <div className='profile-wrapper'>
            <img src={pic1} alt="" />
            <h2>My Profile</h2>
            <div className="details">
                <div className="details-block">
                    <p>Name:</p>
                    <span>Adora Nowafa</span>
                </div>
                <div className="details-block">
                    <p>Job:</p>
                    <span>Cloud Engineer</span>
                </div>
                <div className="details-block">
                    <p>Company:</p>
                    <span>Microsoft</span>
                </div>
            </div>
            <div className="social-links" style={{marginBottom:'20px'}}>
                <Twitter size={28} />
                <Facebook size={28} style={{margin:'0px 20px'}}/>
                <Instagram size={28} />
            </div>
            <button className='btn btn-grad'>View Profile</button>
        </div>
    )
}

export default Profile