import React from 'react';

const SetClass = (props) => {

    const { began, description, id, image, title, price } = props.clss;

    return (
        <div className=" border-solid border-4 border-light-blue-500 mx-4 my-4 mt-12 ">

            <div >
                <img src={image} alt="" />
                <h4 className="font-medium text-red-700 my-2">{id}</h4>
                <h2 className="font-bold  my-2">{title}</h2>
                <p className="text-justify pl-5 pr-2 font-normal">{description}</p>
                <h5 className="font-semibold">{began}</h5>
                <h5 className="font-bold text-blue-600 my-4">Price: {price}</h5>
                <button className="bg-blue-700 text-white rounded-lg mt-2  p-2 mb-3">Enroll Here</button>
            </div>
        </div>
    );
};

export default SetClass;