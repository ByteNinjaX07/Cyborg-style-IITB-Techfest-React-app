import { useState } from 'react';
import styles from './CAForm.module.css';

function CAForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    city: '',
    year: '',
    reason: '',
    agree: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert('Application submitted successfully!');

    console.log(formData);
  }

  return (
    <div className={styles['overlay']}>
      <div className={styles['formContainer']}>
        <button
          className={styles['closeButton']}
          onClick={onClose}
          type="button"
        >
          ×
        </button>

        <h1>
          BECOME A <span>CA</span>
        </h1>

        <p className={styles['subtitle']}>
          Be the voice of Techfest on your campus.
          <br />
          Fill in your details to apply for the Campus Ambassador program.
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles['formGrid']}>
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="college"
              placeholder="College / University *"
              value={formData.college}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City *"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="">Select Year of Study *</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
              <option value="5th Year">5th Year</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <textarea
            name="reason"
            placeholder="Why do you want to be a CA? *"
            value={formData.reason}
            onChange={handleChange}
            maxLength={200}
            required
          />

          <p className={styles['counter']}>
            {formData.reason.length}/200
          </p>

          <label className={styles['terms']}>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <span>
              I agree to the Terms & Conditions and Privacy Policy.
            </span>
          </label>

          <button className={styles['submitButton']} type="submit">
            Submit Application →
          </button>
        </form>
      </div>
    </div>
  );
}

export default CAForm;