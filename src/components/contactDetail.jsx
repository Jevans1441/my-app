const ContactDetail = ({ contact }) => {
    const { name, address, city, state, zipCode, phone, email } = contact;
    return (
        <li>
            <h2>{name}</h2>
            <p>{address}</p>
            <p>{city}, {state}</p>
            <p>{zipCode}</p>
            <p>{phone}</p>
            <p>{email}</p>
        </li>
    )
};

export default ContactDetail;