import React, { useState } from 'react';
import homeImage1 from './assets/images.jpg'; // Import images
import homeImage2 from './assets/image2.jpg';
import homeImage3 from './assets/image3.webp';
import homeImage4 from './assets/shaper-machine.webp';
import machines5 from './assets/machines5.jpg';
import milling from './assets/milling-machine.jpg';
import './styles/Home.css'; // Import the CSS file

const Home = () => {
  // Array of image data with title, description, and image paths
  const images = [
    {
      id: 1,
      src: homeImage1,
      title: 'Image 1 Title',
      description: 'This is the description for Image 1.',
    },
    {
      id: 2,
      src: homeImage2,
      title: 'Image 2 Title',
      description: 'This is the description for Image 2.',
    },
    {
      id: 3,
      src: homeImage3,
      title: 'Image 3 Title',
      description: 'This is the description for Image 3.',
    },
    {
      id: 4,
      src: homeImage4,
      title:'Image 4 title',
      description: 'This is the description for Image 4.',
    },
    {
      id:5,
      src:machines5,
      title:'Image 5 title',
      description:'This is the description for Image 5'

    },
    {
      id:6,
      src:milling,
      title:'Image 6 title',
      description:'This is the description for Image 6'
    }
  ];

  // State to manage which image's details should be shown
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal (reset the selected image)
  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page!</h1>
      <div className="image-grid">
        {/* Loop through images and display each image in a card */}
        {images.map((image) => (
          <div key={image.id} className="image-card">
            <div className="image-card-content">
              <img
                src={image.src}
                alt={image.title}
                className="image-card-img"
                onClick={() => handleImageClick(image)}
              />
              <div className="image-card-text">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <button className="details-button" onClick={() => handleImageClick(image)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal to display the full image and details */}
      {selectedImage && (
        <div className="overlay">
          <div className="modal">
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.description}</p>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="modal-img"
            />
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
