import React, { useState } from 'react';
import './ContactMeSection.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactMeSection = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      comment: Yup.string()
        .min(25, 'Must be at least 25 characters')
        .required('Required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        setSubmissionStatus({
          type: 'success',
          message: `Thank you, ${values.firstName}! Your message has been sent successfully.`,
        });
        
        resetForm();
      } catch (error) {
        setSubmissionStatus({
          type: 'error',
          message: 'Something went wrong. Please try again.',
        });
      } finally {
        setSubmitting(false);
        
        // Clear status message after 5 seconds
        setTimeout(() => {
          setSubmissionStatus(null);
        }, 5000);
      }
    },
  });

  return (
    <section id="contact-me-section" className="contact-section">
      <h2>Contact Me</h2>
      
      {submissionStatus && (
        <div className={`alert ${submissionStatus.type}`}>
          {submissionStatus.message}
        </div>
      )}
      
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Name *</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error">{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="type">Type of enquiry</label>
          <select
            id="type"
            name="type"
            {...formik.getFieldProps('type')}
          >
            <option value="hireMe">Freelance project proposal</option>
            <option value="openSource">Open source consultancy session</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comment">Your message *</label>
          <textarea
            id="comment"
            name="comment"
            rows="5"
            {...formik.getFieldProps('comment')}
          />
          {formik.touched.comment && formik.errors.comment ? (
            <div className="error">{formik.errors.comment}</div>
          ) : null}
        </div>

        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default ContactMeSection;
