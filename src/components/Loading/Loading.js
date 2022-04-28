import React from 'react';
import Progress from '../../images/loading-image.gif';
const Loading = () => {
    return (
        <div style={{height: '400px',marginTop:'150px'}} className='w-100 d-flex justify-content-center align-items-center'>
            <img src={Progress} className='block mx-auto' alt="" />
        </div>
    );
};

export default Loading;