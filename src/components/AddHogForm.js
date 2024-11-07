// AddHogForm.js
import React, { useState } from 'react';

function AddHogForm({ addHog }) {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    weight: '',
    greased: false,
    'highest medal achieved': '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHog({ ...formData, weight: parseFloat(formData.weight) });
    setFormData({
      name: '',
      specialty: '',
      weight: '',
      greased: false,
      'highest medal achieved': '',
      image: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="specialty" placeholder="Specialty" value={formData.specialty} onChange={handleChange} />
      <input name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} type="number" />
      <label>
        Greased:
        <input name="greased" type="checkbox" checked={formData.greased} onChange={handleChange} />
      </label>
      <input name="highest medal achieved" placeholder="Highest Medal Achieved" value={formData['highest medal achieved']} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default AddHogForm;
