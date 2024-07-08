import React, { useState } from 'react';
import LOGO from "../../assets/images/i.ico"

type ModalProps = {
    closeModal: () => void;
};

const QuoteModal = ({ closeModal }: ModalProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        setName("");
        setEmail("");
        setMessage("");

        closeModal();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close-button" onClick={closeModal}>&times;</span>
                <div className="logo-container">
                    <img src={LOGO} alt="Company Logo" className="logo"/>
                </div>
                <form onSubmit={handleSubmit} className='brochure-form'>
                    <label htmlFor="name" className='text'>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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

                    <button type="submit" className="modalbutton">Send Your Request</button>
                </form>
            </div>
        </div>
    );
};

export default QuoteModal;
