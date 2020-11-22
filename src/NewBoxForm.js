import React, { useState } from 'react';
import './NewBoxForm.css';

const INIT_STATE = {
    width: '',
    height: '',
    color: '#000000'
};

function NewBoxForm({ addBox }) {
    const [formData, setFormData] = useState(INIT_STATE);
    const handleSubmit = e => {
        e.preventDefault();
        addBox(formData);
        setFormData(INIT_STATE);
    }
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(form => ({ ...form, [name]: value }));
    }

    return (
        <form onSubmit={handleSubmit} className="NewBoxForm" data-testid="form">
            <label htmlFor="width">Width: </label>
            <input
                id="width"
                name="width"
                value={formData.width}
                type="number"
                min="1"
                onChange={handleChange}
                required
            />
            <label htmlFor="height">Height: </label>
            <input
                id="height"
                name="height"
                value={formData.height}
                type="number"
                min="1"
                onChange={handleChange}
                required
            />
            <label htmlFor="color">Color: </label>
            <input
                id="color"
                name="color"
                value={formData.color}
                type="color"
                onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    );
}

export default NewBoxForm;
