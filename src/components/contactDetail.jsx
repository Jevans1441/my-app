import { useState } from "react";


const ContactDetail = ({ selectedContact, action }) => {
  const { name, address, city, state, zipCode, phone, email, id, dogName } = selectedContact;
  
    const [dogPic, setDogPic] = useState(null);
    
    const handleDogClick = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((Response) => Response.json())
            .then((data) => setDogPic(data.message));
    };
    
    return (
    <>
      {selectedContact && (
        <li className="list">
          <h2>{name}</h2>
          <p>{address}</p>
          <p>
            {city}, {state}
          </p>
          <p>{zipCode}</p>
          <p>{phone}</p>
          <p>{email}</p>
        <button className="contactBtn" onClick={() => action(id)}>Delete Contact</button>
        <button className="contactBtn" onClick={handleDogClick}>Dog Pic</button>
            <div>
                <img className="dogImg" src={dogPic} />
                <p>{dogName}</p>
            </div>
        </li>
        
      )}

      
    </>
  );
};

export default ContactDetail;
