import { useState } from "react";

const ContactForm = ({ action }) => {

    const [contact, setContact] = useState({})

    const handleChange = e => {
        const key = e.target.dataset.keyname;
        const value = e.target.value;
        const updatedContact = { ...contact }; // ... is spread syntax
        updatedContact[key] = value; // key is in brackets because it is dynamic and hits several keys
        setContact(updatedContact)
    }

    const handleReset = (e) => {
        e.preventDefault();
        action(contact);
        setContact({})
    }

    return (
        // <form onSubmit={(e) => action(e, name, address, zipCode, phone, email)}>
        <form onSubmit={handleReset}>

            <div className="contact-field">
                <label>
                    <span className="label-name">Full name</span>
                    {/* <input onChange={handleNameChange} value={name} /> */}
                    <input onChange={handleChange} data-keyname="name" value={contact.name || ''} />
                </label>
            </div>

            <div className="contact-field">
                <label>
                    <span className="label-name">Address</span>
                    {/* <input onChange={handleAddressChange} value={address}></input> */}
                    <input onChange={handleChange} data-keyname="address" value={contact.address || ''}></input>
                </label>
            </div>
            
            <div className="contact-field">
                <label>
                    <span className="label-name">City</span>
                    {/* <input onChange={handleAddressChange} value={address}></input> */}
                    <input onChange={handleChange} data-keyname="city" value={contact.city || ''}></input>
                </label>
            </div>
            
            <div className="contact-field">
                <label>
                    <span className="label-name">State</span>
                    {/* <input onChange={handleAddressChange} value={address}></input> */}
                    <input onChange={handleChange} data-keyname="state" value={contact.state || ''}></input>
                </label>
            </div>
                
            <div className="contact-field">
                <label>
                    <span className="label-name">Zip Code</span>
                {/* <input onChange={handleZipChange} value={zipCode}></input> */}
                    <input onChange={handleChange} data-keyname="zipCode" value={contact.zipCode || ''}></input>
                </label>
            </div>
                
            <div className="contact-field">
                <label>
                    <span className="label-name">Phone</span>
                    {/* <input onChange={handlePhoneChange} value={phone}></input> */}
                    <input onChange={handleChange} data-keyname="phone" value={contact.phone || ''}></input>
                </label>
            </div>
                
            <div className="contact-field">
                <label>
                    <span className="label-name">Email</span>
                    {/* <input onChange={handleEmailChange} value={email}></input> */}
                    <input onChange={handleChange} data-keyname="email" value={contact.email || ''}></input>
                </label>
            </div>
                
            <button class="btn" type="submit">Submit</button>

        </form>
    );
};

export default ContactForm;