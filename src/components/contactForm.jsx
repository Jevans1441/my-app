import { useState } from "react";


const ContactForm = ({ action }) => {
    const [name, setName] = useState('Bill');
    
    const handleChange = (e) => {
        const target = e.target.value;
        setName(target);
    };

    return (
        <form onSubmit={(e) => action(e, name)}>
            <label>
                <span>Full name</span>
                {/* input is a self closing tag */}
                <input onChange={handleChange} value={name} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;