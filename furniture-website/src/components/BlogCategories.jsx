import React from 'react';

import furnitureCareImage from '../assets/images/blog-furniture-care.jpg';
import styleDecorImage from '../assets/images/blog-style-decor.jpg';
import buyingGuidesImage from '../assets/images/blog-buying-guides.jpg';
import trendsInsightsImage from '../assets/images/blog-trends-insights.jpg';
import behindScenesImage from '../assets/images/blog-behind-scenes.jpg';

const BlogCategories = () => {
    return (
        <div className="blog-categories-section">
            <div className="container">
                {/* Heading Section */}
                <div className="row justify-content-center text-center mb-4">
                    <div className="col-12">
                        <h1 className="blog-main-heading">Blogs for our casino</h1>
                        <button className="blog-inspiration-button">
                            Tips, Trends, and Inspiration for Your Dream Home
                        </button>
                    </div>
                </div>

                {/* Category Cards Section */}
                <div className="blog-cards-grid">

                    {/* Row 1: Left & Right Columns */}
                    <div className="row g-4 mb-4">
                        {/* Column 1: Furniture Care & Maintenance */}
                        <div className="col-md-6">
                            <div className="blog-category-card">
                                <div className="blog-icon-wrapper">
                                    <img src={furnitureCareImage} alt="Furniture Care" className="blog-category-icon" />
                                </div>
                                <div className="blog-text-content">
                                    <h3 className="blog-category-title">Furniture Care & Maintenance</h3>
                                    <p className="blog-category-desc">How to Clean and Maintain Wooden Furniture</p>
                                    <p className="blog-category-desc">Best Tips to Keep Your Sofa Looking New for Years</p>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Style & Decor Inspiration */}
                        <div className="col-md-6">
                            <div className="blog-category-card">
                                <div className="blog-icon-wrapper">
                                    <img src={styleDecorImage} alt="Style & Decor" className="blog-category-icon" />
                                </div>
                                <div className="blog-text-content">
                                    <h3 className="blog-category-title">Style & Decor Inspiration</h3>
                                    <p className="blog-category-desc">Scandinavian vs. Modern: What's Right for Your Home</p>
                                    <p className="blog-category-desc">10 Living Room Layout Ideas That Actually Work</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Left & Right Columns */}
                    <div className="row g-4 mb-4">
                        {/* Column 1: Buying Guides */}
                        <div className="col-md-6">
                            <div className="blog-category-card">
                                <div className="blog-icon-wrapper">
                                    <img src={buyingGuidesImage} alt="Buying Guides" className="blog-category-icon" />
                                </div>
                                <div className="blog-text-content">
                                    <h3 className="blog-category-title">Buying Guides</h3>
                                    <p className="blog-category-desc">How to Choose the Right Dining Table for Your Family</p>
                                    <p className="blog-category-desc">A Complete Guide to Mattress Types and Comfort Levels</p>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Trends & Insights */}
                        <div className="col-md-6">
                            <div className="blog-category-card">
                                <div className="blog-icon-wrapper">
                                    <img src={trendsInsightsImage} alt="Trends & Insights" className="blog-category-icon" />
                                </div>
                                <div className="blog-text-content">
                                    <h3 className="blog-category-title">Trends & Insights</h3>
                                    <p className="blog-category-desc">2025 Furniture Trends You'll Want in Your Home</p>
                                    <p className="blog-category-desc">Why Minimalist Furniture Is Still Going Strong</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Full Width (Behind the Scenes) */}
                    <div className="row justify-content-center g-4">
                        <div className="col-12 col-lg-8 mx-auto">
                            <div className="blog-category-card full-width-card">
                                <div className="blog-icon-wrapper">
                                    <img src={behindScenesImage} alt="Behind the Scenes" className="blog-category-icon" />
                                </div>
                                <div className="blog-text-content">
                                    <h3 className="blog-category-title full-width-title">Behind the Scenes / Brand Stories</h3>
                                    <p className="blog-category-desc full-width-desc">Meet the Makers: How Our Furniture is Handcrafted Our Sustainability Journey:</p>
                                    <p className="blog-category-desc full-width-desc">From Forest to Furniture 2025 Furniture Trends You'll Want in Your Home.</p>
                                    <p className="blog-category-desc full-width-desc">A Complete Guide to Mattress Types and Comfort Levels.</p>
                                    <p className="blog-category-desc full-width-desc">How to Clean and Maintain Wooden Furniture.</p>
                                    <p className="blog-category-desc full-width-desc">Best Tips to Keep Your Sofa Looking New for Years.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCategories;