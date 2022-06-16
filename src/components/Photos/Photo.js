import React from 'react';

const Photo = (props) => {
    const { url, title } = props.photo;

    return (
        <div>
            <img style={{ width: '100%', borderRadius: '10PX' }} src={url} alt="" />
            <h2>{title}</h2>
        </div>
    );
};

export default Photo;