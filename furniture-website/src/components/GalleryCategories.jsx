import React from 'react';

import galleryMain1 from '../assets/images/gallery-main-1.jpg';
import galleryMain2 from '../assets/images/gallery-main-2.jpg';
import diningStyleImage from '../assets/images/gallery-dining-style.jpg';
import storageShelvingImage from '../assets/images/gallery-storage-shelving.jpg';
import bedroomBlissImage from '../assets/images/gallery-bedroom-bliss.jpg';
import workspaceEssentialsImage from '../assets/images/gallery-workspace-essentials.jpg';
import outdoorComfortImage from '../assets/images/gallery-outdoor-comfort.jpg';

const GalleryCategories = () => {
    return (
        <div className="gallery-categories-section">
            <div className="container-fluid gallery-main-container">

                {/* row 1: image, headings, image */}
                <div className="row justify-content-center align-items-center mb-3 gallery-row-1-header">

                    {/* left image */}
                    <div className="col-md-3 col-lg-2 text-center text-md-start mb-3 mb-md-0">
                        <img src={galleryMain1} alt="Gallery Intro 1" className="gallery-main-round-img" />
                    </div>

                    {/* center headings */}
                    <div className="col-md-6 col-lg-8 text-center">
                        <h1 className="gallery-main-heading">Furniture Gallery</h1>
                        <p className="gallery-main-subheading">Explore Our Stylish & Comfortable Collections</p>
                    </div>

                    {/* right image */}
                    <div className="col-md-3 col-lg-2 text-center text-md-end mt-3 mt-md-0">
                        <img src={galleryMain2} alt="Gallery Intro 2" className="gallery-main-round-img" />
                    </div>
                </div>

                {/* row 1 description */}
                <div className="row justify-content-center text-center mb-5 gallery-row-1-description">
                    <div className="col-12 col-lg-8">
                        <p className="gallery-main-description">
                            Discover our curated range of premium furniture pieces designed to bring elegance, comfort,
                            and functionality to your home. Whether you're looking to refresh your living room, upgrade
                            your bedroom, or create a productive office space, our gallery offers inspiration and top-
                            quality craftsmanship.
                        </p>
                    </div>
                </div>

                {/* row 2: left vertical image, center round image, right vertical image */}
                <div className="row g-4 mb-5 justify-content-center gallery-row-2">

                    {/* dining in style vertical card */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="gallery-card-item vertical-card">
                            <div className="gallery-card-image-wrapper vertical-image-wrapper">
                                <img src={diningStyleImage} alt="Dining in Style" className="gallery-card-img" />
                            </div>
                            <div className="gallery-card-content">
                                <h3 className="gallery-card-title">Dining in Style</h3>
                                <p className="gallery-card-desc">
                                    Explore our dining tables, chairs, and sideboards crafted for comfort and durability
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* storage & shelving round image center */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="gallery-card-item">
                            <div className="gallery-card-image-wrapper round-image-wrapper">
                                <img src={storageShelvingImage} alt="Storage & Shelving" className="gallery-card-img-round" />
                            </div>
                            <div className="gallery-card-content">
                                <h3 className="gallery-card-title">Storage & Shelving</h3>
                                <p className="gallery-card-desc">
                                    Storage & Shelving Discover modern cabinets, bookshelves, and multipurpose organizers
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* bedroom bliss vertical card */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="gallery-card-item vertical-card">
                            <div className="gallery-card-image-wrapper vertical-image-wrapper">
                                <img src={bedroomBlissImage} alt="Bedroom Bliss" className="gallery-card-img" />
                            </div>
                            <div className="gallery-card-content">
                                <h3 className="gallery-card-title">Bedroom Bliss</h3>
                                <p className="gallery-card-desc">
                                    Explore our dining tables, chairs, and sideboards crafted for comfort and durability
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* row 3: left round image with content, right round image with content */}
                <div className="row g-4 justify-content-center gallery-row-3">

                    {/* workspace essentials horizontal card */}
                    <div className="col-12 col-md-6 col-lg-5">
                        <div className="gallery-card-item horizontal-card">
                            <div className="gallery-card-image-wrapper round-image-wrapper me-4">
                                <img src={workspaceEssentialsImage} alt="Workspace Essentials" className="gallery-card-img-round" />
                            </div>
                            <div className="gallery-card-content">
                                <h3 className="gallery-card-title">Workspace Essentials</h3>
                                <p className="gallery-card-desc">
                                    Ergonomic chairs, functional desks, and storage units to elevate productivity
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* outdoor comfort horizontal card */}
                    <div className="col-12 col-md-6 col-lg-5">
                        <div className="gallery-card-item horizontal-card">
                            <div className="gallery-card-image-wrapper round-image-wrapper me-4">
                                <img src={outdoorComfortImage} alt="Outdoor Comfort" className="gallery-card-img-round" />
                            </div>
                            <div className="gallery-card-content">
                                <h3 className="gallery-card-title">Outdoor Comfort</h3>
                                <p className="gallery-card-desc">
                                    Stylish patio furniture, garden benches, and weather-resistant lounge sets
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryCategories;
