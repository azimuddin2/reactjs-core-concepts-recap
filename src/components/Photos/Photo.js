import React from 'react';

const Photo = (props) => {
    const { url } = props.photo;

    return (
        <div>
            <img style={{ width: '100%', borderRadius: '10PX' }} src={url} alt="" />
        </div>
    );
};

export default Photo;