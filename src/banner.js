import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import "./banner.css"

export default function Banner() {
    const [artist, setArtist] = useState([]);

    // Copied from stack over flow, the minimum text version

    function shorten(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get(requests.albumPhotos)
    //         // console.log(request.data.results)
    //         setMovie(request.data[Math.floor(Math.random() * request.data.length - 1)])
    //         // setMovie(request.data.results[Math.floor(Math.random() * request.data.results - 1)])
    //         return request;
    //     }
    //     fetchData();
    // }, [])
    console.log(artist)
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://chocolatecitygroup.com/wp-content/uploads/2017/07/Chocolate-city-music-artists-01.jpg")`,
                backgroundPosition: "center center"
            }}
        >
        
            <div className="banner_contents">
                <h1 className="banner_title">Welcome To chocolatecity</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {shorten("Chocolate City Group is a 360-degree media and entertainment company consisting of a music label, music licensing company, management consulting firm and lounge. We are located in Lagos, Abuja and Nairobi, and have operations in the United Kingdom, United States, South-Africa and Ghana", 150)}

                </h1>
            </div>
            <div className="banner_fadebottom" />
        </header>
    )
}