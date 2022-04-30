import React from 'react';

const UserCustomImage = ({firstLetter,letterWidth,letterHeight,letterMargin}) => {
    return (
        <div style={{borderRadius:'50%',width:letterWidth,height:letterHeight,marginLeft:letterMargin}} className={`uppercase bg-purple-800 text-white flex justify-center  pt-[2px] text-2xl`}>
            {firstLetter}
        </div>
    );
};

export default UserCustomImage;