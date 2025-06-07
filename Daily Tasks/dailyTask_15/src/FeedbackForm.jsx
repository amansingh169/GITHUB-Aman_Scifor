import React, { useState } from "react";

const FeedbackForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 1,
  });

  return (
    <form id="form" method="post">
      <label htmlFor="name">
        <h2>Enter your Name:</h2>
        <input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          type="text"
          required
        />
      </label>
      <label htmlFor="email">
        <h2>Enter your Email:</h2>
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          required
        />
      </label>
      <label htmlFor="name">
        <h2>How much would you rate our service?:</h2>
        <select
          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
          value={formData.rating}
          name="rating"
          id="rating"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <br />
      <br />
      <input onClick={handleSubmit} id="submit" type="submit" />
      <br />
      <br />
      <div className="output">
        <h3>{`Name: ${formData.name}`}</h3>
        <h3>{`Email: ${formData.email}`}</h3>
        <h3>{`Rating: ${formData.rating}`}</h3>
      </div>
    </form>
  );
};

export default FeedbackForm;
