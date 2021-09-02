import React, { useState, useEffect } from 'react'
import axios from './axios'
import './artists.css'

export default function Row({fetchUrl, title, isLowRow}) {
      function shorten(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }
    const [artists, setArtist] = useState([])

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setArtist(request.data);
            return request;
            console.log(request)

        }
        fetchData();

    }, [fetchUrl]);

    return (
        <div>
            <h2>{title}</h2>
            <div className="row_posters">
                {artists.map((artist) => {
                    const { name, title, thumbnailUrl } = artist
                    return (
                        <div>
                        <img src = "https://via.placeholder.com/600/e9b68" className = {`row_poster ${isLowRow && "row__posterLarge"}`} alt = {title}/>
                        <p>{name}</p>
                        <p>{title}</p>
                        </div>
                        

                    )
                })}
            </div>

        </div>
    )
}