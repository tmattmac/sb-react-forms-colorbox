import React, { useState } from 'react';
import './BoxList.css';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';

function BoxList() {
    const [boxList, setBoxList] = useState([]);
    const addBox = ({ width, height, color }) => {
        setBoxList(list => [...list, { width, height, color, id: uuid() }]);
    };
    const removeBox = id => {
        setBoxList(list => list.filter(e => e.id !== id));
    };

    return (
        <>
            <NewBoxForm addBox={addBox} />
            <div className="BoxList">
                { boxList.map(({ id, width, height, color }) => (
                    <Box
                        key={id}
                        width={width}
                        height={height}
                        backgroundColor={color}
                        remove={() => removeBox(id)}
                    />
                ))}
            </div>
        </>
    );
}

export default BoxList;
