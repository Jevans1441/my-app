const ContactDetail = ({ selectedContact, action }) => {
    const { name, address, city, state, zipCode, phone, email, id } = selectedContact;
    return (

        <>
            {
                selectedContact && (
                    <li className="list">
                        <h2>{name}</h2> 
                        <p>{address}</p> 
                        <p>{city}, {state}</p>
                        <p>{zipCode}</p>
                        <p>{phone}</p>
                        <p>{email}</p>
                        <button onClick={() => action(id)}>Delete Contact</button>
                    </li>
                )}
        </>
    );
};

export default ContactDetail;