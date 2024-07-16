import React, { useState } from 'react';
// import './Modal.css'; // Import your CSS file if not using inline styles
import LOGO from "../../assets/images/icon_logo_form.png"

type ModalProps = {
    closeModal: () => void;
};

const Modal = ({ closeModal }: ModalProps) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic (e.g., downloading file)

        // Example: Initiating a download link
        const downloadUrl = 'https://leelavatiautomation.com/wp-content/uploads/2022/03/Leelavati_Automation_catlog_new.pdf';
        window.location.href = downloadUrl;

        closeModal();  // Close the modal after submission
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close-button" onClick={closeModal}>&times;</span>
                <div className="logo-container">
                    <img src={LOGO} alt="Company Logo" className="logo"/>
                   
                </div>
                {/* <h3>Automate Future</h3> */}
                {/* <h2>Download Brochure</h2> */}
                <form onSubmit={handleSubmit} className='brochure-form'>
                    <label htmlFor="name" className='text'>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}  // Add state for 'name'
                        onChange={(e) => setName(e.target.value)}  // Uncomment the onChange handler
                        required
                        className="inputmodal"
                    />

                    <label htmlFor="email" className='text'>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="inputmodal"
                    />
                    <label htmlFor="phone"className='text'>Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="inputmodal"
                    />
                    <label htmlFor="message" className='text'>Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="inputmodal"
                        rows={4}
                    />
                    <button type="submit" className="modalbutton">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;