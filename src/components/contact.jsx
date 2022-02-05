const Contact = ({ contact }) => {
    const { name, address, city, state, zipCode, phone, email } = contact;
    return (
        <li>
            <h2>Name: {name}</h2>
            <p>Address: {address}</p>
            <p>City: {city}, {state}</p>
            <p>Zip: {zipCode}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </li>
    )
};

export default Contact;