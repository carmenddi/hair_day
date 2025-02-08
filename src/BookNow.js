import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useState} from 'react';

// Validation schema using Yup
const ReservationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Name is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number is not valid')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  date: Yup.date().required('Date is required'),
  time: Yup.string()
    .required('Time is required')
    .matches(/^([1][0-8]):([0-5][0-9])$/, 'Time must be between 10:00 and 19:00'),
    service: Yup.array().min(1, 'At least one service must be selected')
  });


export default function BookNow() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };
    return (
      <div className='title'>
        <h2>Book Now</h2>
      <div className="reservation-form">
      <Formik
  initialValues={{
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: [],  // Initialize as an array for multiple services
  }}
  validationSchema={ReservationSchema}  // Assuming you're using Yup for validation
  onSubmit={(values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2)); // Log form values
      setSubmitting(false);
      resetForm();
      setShowModal(true); // Show modal after form submission
    }, 400);
  }}
>
  {({ isSubmitting, values }) => (
    <Form>
      <div className='toedit'>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" className="error-message" />
      </div>

      <div className='toedit'>
        <label htmlFor="phone">Phone</label>
        <Field type="text" name="phone" />
        <ErrorMessage name="phone" component="div" className="error-message" />
      </div>

      <div className='toedit'>
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" className="error-message" />
      </div>

      <div className='toedit'>
        <label htmlFor="date">Date</label>
        <Field type="date" name="date" />
        <ErrorMessage name="date" component="div" className="error-message" />
      </div>

      <div className='toedit'>
        <label htmlFor="time">Time</label>
        <Field type="time" name="time" min="10:00" max="19:00" />
        <ErrorMessage name="time" component="div" className="error-message" />
      </div>

      <div className='checkbox-selection'>
        <label>Service</label>
        <div role="group" aria-labelledby="checkbox-group" className='options'>
          <div className='checkbox-item'>
            <Field type="checkbox" name="service" value="color" />
            <span>Color</span>
          </div>
          <div className='checkbox-item'>
            <Field type="checkbox" name="service" value="cut" />
            <span>Cut</span>
          </div>
          <div className='checkbox-item'>
            <Field type="checkbox" name="service" value="styling" />
            <span>Styling</span>
          </div>
        </div>
        <ErrorMessage name="service" component="div" className="error-message" />
      </div>

      <div>
        <button type="submit" disabled={isSubmitting}>
          Reserve Appointment
        </button>
      </div>
    </Form>
  )}
</Formik>

      {/* Modal for Success Message */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Appointment Reserved!</h2>
            <p>Your appointment has been successfully reserved.</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};