import React from 'react';
import useClasses from '../../Hooks/useClasses';
import SetTrainee from '../SetTrainee/SetTrainee';

const Trainers = () => {
    const [classes] = useClasses();

    return (
        <div className="grid grid-cols-4 ">
            {
                classes.map(trainee => <SetTrainee trainee={trainee}></SetTrainee>)
            }

        </div>
    );
};

export default Trainers;