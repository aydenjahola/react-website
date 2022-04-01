import React, { useState } from 'react';
import './Gallery.css';
import CloseIcon from '@material-ui/icons/Close';

/* Stores photos in the form of multiple dicts in arrays, expands on that when clicked. Gallery is meant to have mosaic property but fails to work on mozilla, I believe its missing some -moz element */
const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: "images/gallery1.jpg",
        },
        {
            id: 2,
            imgSrc: "images/gallery2.jpg",
        },
        {
            id: 3,
            imgSrc: "images/gallery3.jpg",
        },
        {
            id: 4,
            imgSrc: "images/gallery4.jpg",
        },
        {
            id: 5,
            imgSrc: "images/gallery5.jpg",
        },
        {
            id: 6,
            imgSrc: "images/gallery6.jpg",
        },
        {
            id: 7,
            imgSrc: "images/gallery7.png",
        },
        {
            id: 8,
            imgSrc: "images/gallery8.png",
        },
    ];

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempimgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempimgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
            <div class="header">
                <img src="images/header.png" alt="About Us" className="header-image" />
                <div class="header-text">
                    <h1 style={{ color: "red" }}>Gallery</h1>
                </div>
            </div>
            <p class="content-title">Gallery</p>
            <hr class="full"></hr><br /><br />
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} />
                <CloseIcon onClick={() => setModel(false)} className="close-button" />
            </div>
            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt="gallery" style={{ width: "100%" }} />
                        </div>
                    )
                })}
            </div>
        </ >

    );
}

export default Gallery
