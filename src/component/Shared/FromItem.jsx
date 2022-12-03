import React from 'react';

const FromItem = ({ label, children, type = "text", ...otherProps }) => {
    return (
        <div>
            {
                type === "text" ? (
                    <>
                    
        <input type={type} {...otherProps} className="input focus:outline-0 focus:border-primary border-t-0 border-l-0 border-r-0 border-b-2 border-gray-400  rounded-none w-full text-center"/>
                    </>
                ):
                <>
               
        <input type={type} {...otherProps} className="input focus:outline-0 focus:border-primary border-t-0 border-l-0 border-r-0 border-b-2 border-gray-400  rounded-none w-full text-center"/>
       
                </>
            }
        </div>
    );
};

export default FromItem;