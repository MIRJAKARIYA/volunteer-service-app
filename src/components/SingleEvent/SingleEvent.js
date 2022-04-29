import React from 'react';

const SingleEvent = ({addedEvent,handleCancelButton}) => {
    console.log(addedEvent)
    const {banner,date,description,title,_id} = addedEvent;
    return (
        <div>
            <div className='flex p-3 w-[350px] bg-white rounded-xl'>
                <div>
                    <img src={banner} className='w-[130px] h-[120px] rounded-xl' alt="" />
                </div>
                <div className='ml-3 w-[200px] relative'>
                    <div>
                        <h5 className='font-bold'>{title}</h5>
                        <p className='font-bold text-xs mt-1'>{date}</p>
                    </div>
                    <button onClick={()=>handleCancelButton(_id)}  className='absolute bg-slate-700 text-white text-sm px-[20px] py-[5px] rounded-md left-[100px] top-[80px]'>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;