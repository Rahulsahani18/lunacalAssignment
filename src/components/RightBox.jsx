import React, { useState } from 'react';
import QuestionIcon from '../Images/question.svg';
import DotIcon from '../Images/dotIcon.svg';
import HrDiv from '../components/hrDiv';
import Arrow1 from '../Images/Arrow1.svg';  // Left arrow
import Arrow2 from '../Images/Arrow2.svg';  // Right arrow

const RightBox = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [images, setImages] = useState([
    'https://media.istockphoto.com/id/476461402/photo/tokyo-skyline-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=LFrhv338wP6Mo_vgFNc3E1wHMCtrbQfjQa_6FIG3EaU=',
    'https://media.istockphoto.com/id/912274822/photo/mt-fuji-and-tokyo-skyline.webp?a=1&b=1&s=612x612&w=0&k=20&c=gTm0cl-_PACp3jpysgqKLg0176yPqIEQtpnzwOrTscs=',
    'https://media.istockphoto.com/id/526845820/photo/tokyo-tower-night-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=yiHiuM0Yq6-1igUtyMzm1LRGohExpiwH5xFeodohfqA='
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);  // Track the starting index of images

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imageUrls]);
    setCurrentImageIndex(0);  // Reset the index when new images are added
  };

  // Function to handle the left arrow click
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(images.length - 3, 0) : prevIndex - 1
    );
  };

  // Function to handle the right arrow click
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex >= images.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Get the images to display, showing 3 at a time
  const displayedImages = images.slice(currentImageIndex, currentImageIndex + 3);

  return (
    <div className='col-md-6'>
      <div className="card FirstWidgets Paragraph p-3" style={{ width: "100%", maxHeight: "18rem", overflowY: "auto" }}>
        <div className="card-body">
          <div className='row'>
            <div className='col-md-1'>
              <span><img src={QuestionIcon} alt="question" /></span>
            </div>
            <div className='col-md-11'>
              <nav className="navbar NavBar">
                <div className="container-fluid p-1">
                  <span
                    className={`navbar-brand mb-0 h1 ms-3 ${activeTab === 'about' ? 'active' : ''}`}
                    onClick={() => handleTabClick('about')}>
                    About Me
                  </span>
                  <span
                    className={`navbar-brand mb-0 h1 ${activeTab === 'experience' ? 'active' : ''}`}
                    onClick={() => handleTabClick('experience')}>
                    Experiences
                  </span>
                  <span
                    className={`navbar-brand mb-0 h1 ${activeTab === 'recommended' ? 'active' : ''}`}
                    onClick={() => handleTabClick('recommended')}>
                    Recommended
                  </span>
                </div>
              </nav>

              <div className="tab-indicator" style={{
                transform: activeTab === 'about' ? 'translateX(2px)' : activeTab === 'experience' ? 'translateX(110%)' : 'translateX(240%)'
              }}></div>
            </div>
          </div>
          <div className='row '>
            <div className='col-md-1 ' style={{ marginTop: "5rem" }}>
              <span><img src={DotIcon} alt="dot" /></span>
            </div>
            <div className='col-md-11 mt-5'>
              <p className='Intro'>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
              <p className='Intro mt-3'>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
            </div>
          </div>
        </div>
      </div>
      <HrDiv />

      {/* Add Image Section */}
      <div className="card secondWidgets p-3 mt-3" style={{ width: "100%", maxHeight: "18rem" }}>
        <div className="card-body">
          <div className='row'>
            <div className='col-md-1'>
              <span><img src={QuestionIcon} alt="question" /></span>
            </div>
            <div className='col-md-11'>
              <div className='row'>
                <div className='col-md-3'>
                  <button className='GalleryBtn'>Gallery</button>
                </div>
                <div className='col-md-9 d-flex justify-content-end'>
                  <label className="add-image-btn">
                    <span>+ ADD IMAGE</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ display: 'none' }}
                    />
                  </label>
                  <div className='Arrow2' onClick={nextImage}>
                    <img className='image-fluid' src={Arrow2} style={{ padding: "13.5px", cursor: 'pointer' }} />
                  </div>
                  <div className='Arrow1' onClick={prevImage}>
                    <img src={Arrow1} style={{ padding: "13.5px", cursor: 'pointer' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className='col-md-1 ' style={{ marginTop: "5rem" }}>
              <span><img src={DotIcon} alt="dot" /></span>
            </div>
            <div className="col-md-11">
              {/* Display the 3 current images */}
              <div className="image-grid">
                {displayedImages.map((image, index) => (
                  <div key={index} className="image-item">
                    <img
                      src={image}
                      alt={`Uploaded ${index + currentImageIndex}`}
                      className="uploaded-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <HrDiv />
    </div>
  );
};

export default RightBox;
