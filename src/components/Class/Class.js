import React from 'react';
import useClasses from '../../Hooks/useClasses';
import SetClass from '../SetClass/SetClass';

const Class = () => {
    const [classes, setClasses] = useClasses();
    return (
        <div className="grid grid-cols-3 ">
            {
                classes.map(clss => <SetClass clss={clss}></SetClass>)
            }
        </div>
    );
};

export default Class;