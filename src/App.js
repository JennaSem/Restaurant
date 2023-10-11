import React, { useState } from "react";
import { data } from "./data";
import { imageData } from "./data";
import "./App.css";

function App() {
  const [restaurant, setRestaurant] = useState(data);
  const [showText, setShowText] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const removeRestaurant = (id) => {
    let newRestaurant = restaurant.filter((item) => item.id !== id);
    setRestaurant(newRestaurant);
  };

  const showTextClick = (item) => {
    item.showMore = !item.showMore;
    setShowText(!showText);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? imageData.length - 1 : prevImage - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === imageData.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <div className="box">
      <div className="center-content">
        <h1>Los Angeles Top {restaurant.length} Restaurants</h1>
      </div>

      {restaurant.map((item) => {
        const { id, name, image, description, showMore } = item;

        return (
          <div key={id}>
            <div>
              <h3>
                {id} - {name}
              </h3>
            </div>

            <div className="container">
              <img src={image} width="300px" height="350px" alt={restaurant} />
            </div>

            <div className="container">
              <p>
                {showMore ? description : description.substring(0, 220) + "..."}
                <button className="btnShow" onClick={() => showTextClick(item)}>
                  {" "}
                  {showMore ? "Show less" : "Show more"}
                </button>
              </p>
            </div>

            <div className="container">
              <button className="btn" onClick={() => removeRestaurant(id)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}

      <div className="container">
        <button className="delete" onClick={() => setRestaurant([])}>
          Delete All
        </button>
      </div>

      <div className="container">
        <h2>More cozy places</h2>

        <img
          src={imageData[currentImage].addImage}
          width="300px"
          height="350px"
          alt="restaurant"
        />

        <div className="btn-container">
          <button onClick={previousImage}>Previous</button>
          <button onClick={nextImage}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
