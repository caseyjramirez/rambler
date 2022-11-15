import React, { useState } from 'react';
import testImage from '../../assets/place-holder.jpeg'
const desc = "The reset styles given here are intentionally very generic. There isn't any default color or background set for the body element, for example. I don't particularly recommend that you just use this in its unaltered state in your own projects."

function BusinessCard({ data, setProfilePic, showJob, showEmail, description, handleChange, highlightDescription }) {
    
    function renderName() {
        if(data.firstName || data.lastName) {
            return <h1 className="mb-10">{data.firstName} {data.lastName}</h1>
        } else {
            return <h1 className="mb-10 placeholder">Give yourself a name!</h1>
        }
    }

    function renderJob() {
        return showJob ? (
            <>
                <div className="flex flex-row mb-5">
                    <h3 className="mr-5">Job: </h3>
                    <h3 className="fw-regular">{data.jobTitle}, {data.company}</h3>
                </div>

                <div className="flex flex-row mb-5">
                    <h3 className="mr-5">Industry: </h3>
                    <h3 className="fw-regular">{data.industry.name}</h3>
                </div>
            </>

        ) : null
    }

    function renderEmail() {
        return showEmail ? (
            <div className="flex flex-row">
            <h3 className="mr-5">Email: </h3>
            <h3 className="fw-regular">{data.email}</h3>
        </div>

        ) : null
    }

    function addProfilePic(e) {
        e.preventDefault();
        let reader = new FileReader();
        let infile = e.target.files[0];

        reader.onloadend = () => {
          setProfilePic(infile, reader.result);
        };
        
        reader.readAsDataURL(infile);
    }

    function renderImage() {
        return data.imagePreviewUrl ? data.imagePreviewUrl : testImage;
    }

    function renderClass() {
        return highlightDescription ? 'cta' : null;
    }
    
    return (
        <div>
            <div className="business-card-image-container">
                <h3>Upload a Profile Image</h3>
                <input onChange={addProfilePic} type="file" accept="image/*" />
                <div className="business-card-image-container-overlay"></div>
                <img className="business-card-image" src={renderImage()} alt="" />
            </div>

            <div className="business-card">
                <div className="break mb-50"></div>
                {renderName()}

                <div className="mb-20">
                    <div className="flex flex-row mb-5">
                        <h3 className="mr-5">City: </h3>
                        <h3 className="fw-regular">{data.city.name}</h3>
                    </div>
                    
                    {renderJob()}
                    {renderEmail()}
                </div>


                <div className="mb-5">
                    <h3 className="mr-5 mb-5">Description:</h3>
                    <textarea
                        className={renderClass()}
                        placeholder='Add your description here!'
                        name='description'
                        onChange={handleChange}
                        value={description}
                    />
                </div>
            </div>
        </div>
    );
}

export default BusinessCard;