import React, { useState } from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";

function Contact() {
  const [selectedOption, setSelectedOption] = useState("");
  const [productName, setProductName] = useState("");
  const [review, setReview] = useState("");
  const [number, setNumber] = useState("+91");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedOption("");
    setProductName("");
    setReview("");
    setNumber("");
  };

  return (
    <div>
      <Nav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p className="contact-desc">Feel free to contact us!!</p>
        <div className="contact-div-class">
          <label htmlFor="dropdown">Choose an option: </label>
          <br />
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="">Please choose your query</option>{" "}
            {/* Default option */}
            <option value="Return">Return</option>
            <option value="Exchange">Exchange</option>
          </select>

          {selectedOption &&
            (selectedOption === "Return" ? (
              <div>
                <div>Please provide the Product name.</div>
                <input
                  className="input-field"
                  type="text"
                  value={productName}
                  onChange={handleProductNameChange}
                />
              </div>
            ) : (
              <div>
                <div>Please provide the Product name.</div>
                <input
                  className="input-field"
                  type="text"
                  value={productName}
                  onChange={handleProductNameChange}
                />
              </div>
            ))}
          <p
            style={{
              margin: "0px",
            }}
          >
            Mobile Number
          </p>
          <input
            type="text"
            value={number}
            onChange={handleNumberChange}
            className="input-field"
          ></input>

          <p
            style={{
              margin: "0px",
            }}
          >
            Reason:
          </p>
          <textarea
            value={review}
            onChange={handleReviewChange}
            rows="4"
            cols="50"
          ></textarea>
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
