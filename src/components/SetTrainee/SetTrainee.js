import React from 'react';

const SetTrainee = (props) => {
    const { person, personImg, gender, email } = props.trainee;
    return (
        <div className=" border-solid border-4 border-light-blue-500 mx-4 my-4 mt-12 text-justify ">
            <div className="pl-12 pr-2">
                <img width="240px" height="340px" src={personImg} alt="" />
                <h5 className="font-bold text-red-700 my-4">Trainer: {person}</h5>
                <p className=" font-semibold">Gender: {gender}</p>
                <h2 className="font-bold text-blue-600 my-2">Contact: {email}</h2>
                <button className="bg-blue-700 text-white rounded-lg mt-2  p-2 mb-3">Contact Me</button>
            </div>

        </div>
    );
};

export default SetTrainee;