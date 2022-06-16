import React, { useEffect, useState } from 'react';
import Photo from './Photo';
import './Photos.css';


const Photos = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

    return (
        <div>
            <h1>PHOTOS</h1>
            <div className='photos-container'>
                {
                    photos.map(photo => <Photo
                        key={photo.id}
                        photo={photo}
                    ></Photo>)
                }
            </div>
        </div>
    );
};

export default Photos;