import { useState } from "react";

const ContactDetail = ({ selectedContact, action }) => {
  const { name, address, city, state, zipCode, phone, email, id, dogName } =
    selectedContact;

  const [dogPic, setDogPic] = useState(null);

  const hardCodedAddress = {"address": "1109 N Highland St, Arlington VA"}

  const options = {
    method: 'POST',
    Headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(hardCodedAddress)
  };


  const handleGetGeo = () => {
    fetch("http://127.0.0.1:8080/location", options)
      .then((Response) => Response.json())
      .then((data) => console.log(data));
  };


  return (
    <>
      {selectedContact && (
        <li className="y-minWidth">
          <h2>{name}</h2>
          <p>{address}</p>
          <p>
            {city}, {state}
          </p>
          <p>{zipCode}</p>
          <p>{phone}</p>
          <p>{email}</p>
          <div btn-container>
            <button className="btn btn--multiples" onClick={() => action(id)}>
              Delete Contact
            </button>
            <button className="btn btn--multiples" onClick={handleGetGeo}>
              Get Geo Coordinates
            </button>
          </div>
          <div>
            <img className="dogImg" src={dogPic} />
          </div>
        </li>
      )}
    </>
  );
};

export default ContactDetail;
