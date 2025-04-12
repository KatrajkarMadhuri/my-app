import React, { useState } from 'react';
import './styles/feedbackForm.css'

const FeedbackForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    contactNumber: '',
    machineName: '',
    warrantyStatus: '',
    serviceStatus: '',
    incompleteReason: '',
    partsRequired: '',
    partsStatus: '',
    paidReason: '',
    PartiallyCompleteReason: '',
    serviceName: '',
    approved: '', // Added 'approved' field here
  });

  // State to store whether the form has been submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle changes to the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle service status change (radio buttons)
  const handleServiceStatusChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      serviceStatus: value,
      incompleteReason: '', // Clear incomplete reason when status changes
      PartiallyCompleteReason: '', // Clear partially complete reason
    });
  };

  // Handle warranty status change (radio buttons)
  const handleWarrantyStatusChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      warrantyStatus: value,
      paidReason: value === 'paid' ? formData.paidReason : '', // Clear paidReason if 'unpaid' is selected
    });
  };

  // Handle form submission to send data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data to be sent as JSON
    const formDataToSend = {
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      contactNumber: formData.contactNumber,
      machineName: formData.machineName,
      serviceName: formData.serviceName,
      warrantyStatus: formData.warrantyStatus,
      serviceStatus: formData.serviceStatus,
      incompleteReason: formData.serviceStatus === 'Incomplete' ? formData.incompleteReason : '', // Only include incompleteReason if status is 'Incomplete'
      PartiallyCompleteReason: formData.serviceStatus === 'Partially Complete' ? formData.PartiallyCompleteReason : '',
      partsRequired: formData.partsRequired,
      partsStatus: formData.partsStatus,
      paidReason: formData.warrantyStatus === 'paid' ? formData.paidReason : '', // Add this for 'paid' status
      approved: formData.approved, // Include 'approved' status here
    };

    try {
      // Send POST request to Spring Boot backend
      const response = await fetch('http://localhost:8282/feedback/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Indicate that we're sending JSON
        },
        body: JSON.stringify(formDataToSend), // Convert form data to JSON
      });

      // Check if the response is OK (status code 200-299)
      if (response.ok) {
        const result = await response.json(); // Parse the response as JSON
        setIsSubmitted(true); // Set form as submitted
        alert('Form submitted successfully!');
        console.log('Form data submitted:', result); // Handle the result from the backend
      } else {
        alert('Form submission failed!');
        console.error('Failed to submit form:', response);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form.');
    }
  };

  // Function to filter out empty or irrelevant fields from the form data
  const getRelevantFormData = (data) => {
    const filteredData = {};

    for (let key in data) {
      if (data[key] && data[key] !== '') {
        filteredData[key] = data[key];
      }
    }

    return filteredData;
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Customer Name */}
        <div>
          <label>Customer Name:</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Customer Email */}
        <div>
          <label>Customer Email:</label>
          <input
            type="email"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Contact Number */}
        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Machine Name */}
        <div>
          <label>Machine Name:</label>
          <input
            type="text"
            name="machineName"
            value={formData.machineName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Service Name */}
        <div>
          <label>Service Type:</label>
          <input
            type="text"
            name="serviceName"
            value={formData.serviceName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Warranty Status */}
        <div>
          <label>Warranty:</label>
          <div>
            <label>
              <input
                type="radio"
                name="warrantyStatus"
                value="paid"
                onChange={handleWarrantyStatusChange}
                checked={formData.warrantyStatus === 'paid'}
              />
              Paid
            </label>
            <label>
              <input
                type="radio"
                name="warrantyStatus"
                value="unpaid"
                onChange={handleWarrantyStatusChange}
                checked={formData.warrantyStatus === 'unpaid'}
              />
              Unpaid
            </label>
          </div>
        </div>

        {/* Invoice Number (only shown if warranty status is 'paid') */}
        {formData.warrantyStatus === 'paid' && (
          <div>
            <label>Invoice Number: </label>
            <input
              type="text"
              name="paidReason"
              value={formData.paidReason}
              onChange={handleInputChange}
            />
          </div>
        )}

        {/* Service Status */}
        <div>
          <label>Status:</label>
          <div>
            <label>
              <input
                type="radio"
                name="serviceStatus"
                value="Complete"
                onChange={handleServiceStatusChange}
                checked={formData.serviceStatus === 'Complete'}
              />
              Complete
            </label>
            <label>
              <input
                type="radio"
                name="serviceStatus"
                value="Incomplete"
                onChange={handleServiceStatusChange}
                checked={formData.serviceStatus === 'Incomplete'}
              />
              Incomplete
            </label>
            <label>
              <input
                type="radio"
                name="serviceStatus"
                value="Partially Complete"
                onChange={handleServiceStatusChange}
                checked={formData.serviceStatus === 'Partially Complete'}
              />
              Partially Complete
            </label>
          </div>
        </div>

        {/* Incomplete Reason (only shown if service status is 'Incomplete') */}
        {formData.serviceStatus === 'Incomplete' && (
          <div>
            <label>Why is it incomplete?</label>
            <input
              type="text"
              name="incompleteReason"
              value={formData.incompleteReason}
              onChange={handleInputChange}
            />
          </div>
        )}

        {/* Partially Complete Reason (only shown if service status is 'Partially Complete') */}
        {formData.serviceStatus === 'Partially Complete' && (
          <div>
            <label>Why is it Partially complete?</label>
            <input
              type="text"
              name="PartiallyCompleteReason"
              value={formData.PartiallyCompleteReason}
              onChange={handleInputChange}
            />
          </div>
        )}

        {/* Parts Required */}
        <div>
          <label>Are component parts required?</label>
          <label>
            <input
              type="radio"
              name="partsRequired"
              value="Yes"
              onChange={handleInputChange}
              checked={formData.partsRequired === 'Yes'}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="partsRequired"
              value="No"
              onChange={handleInputChange}
              checked={formData.partsRequired === 'No'}
            />
            No
          </label>
        </div>

        {/* Only show "Approved" option when parts are required */}
        {formData.partsRequired === 'Yes' && (
          <div>
            <label>
              <input
                type="radio"
                name="approved"
                value="Yes"
                onChange={handleInputChange}
                checked={formData.approved === 'Yes'}
              />
              Quotation Approved
            </label>
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* Display form data after submission */}
      {isSubmitted && (
        <div>
          <h3>Form Data:</h3>
          <pre>{JSON.stringify(getRelevantFormData(formData), null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
