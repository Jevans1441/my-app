import { useState } from "react";


const ContactForm = ({ action }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')


    
    const handleNameChange = (e) => {
        const target = e.target.value;
        setName(target)
    };

        const handleAddressChange = (e) => {
        const target = e.target.value;
        setAddress(target)
    };

        const handleZipChange = (e) => {
        const target = e.target.value;
        setZipCode(target)
    };
    
        const handlePhoneChange = (e) => {
        const target = e.target.value;
        setPhone(target)
    };
    
        const handleEmailChange = (e) => {
        const target = e.target.value;
        setEmail(target)
    };

    return (
        <form onSubmit={(e) => action(e, name, address, zipCode, phone, email)}>
            <label>
                <span>Full name</span>
                <input onChange={handleNameChange} value={name} />
            </label>
            <label>
                <span>Address</span>
                <input onChange={handleAddressChange} value={address}></input>
            </label>
            <label>
                <span>Zip Code</span>
                <input onChange={handleZipChange} value={zipCode}></input>
            </label>
            <label>
                <span>Phone</span>
                <input onChange={handlePhoneChange} value={phone}></input>
            </label>
            <label>
                <span>Email</span>
                <input onChange={handleEmailChange} value={email}></input>
            </label>
            <button type="submit">Submit</button>

        </form>
    );
};

export default ContactForm;