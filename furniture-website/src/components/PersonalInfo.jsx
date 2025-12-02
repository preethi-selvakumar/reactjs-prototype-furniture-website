import react, { useState } from "react";
// profile image import
import profileImage from "../assets/images/user-profile-image.jpg";

// initial empty form state
const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
};

const PersonalInfo = () => {
    // using initialFormData as the form state
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. show alert message
        alert("your profile information has been updated successfully.");

        // 2. clear all form fields
        setFormData(initialFormData); // reset state to initial empty values

        console.log("updated data:", formData);
    };

    return (
        <div className="personal-info-wrapper">
            <div className="personal-info-container">

                {/* profile image section - placed above first name/last name */}
                <div className="row justify-content-end mb-4">
                    <div className="col-auto">
                        <img
                            src={profileImage}
                            alt="profile"
                            className="personal-info-top-profile-img"
                        />
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row g-4">

                        {/* first name */}
                        <div className="col-md-6">
                            <div className="personal-info-input-group">
                                <label htmlFor="firstName" className="personal-info-label">first name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="personal-info-input-style"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* last name */}
                        <div className="col-md-6">
                            <div className="personal-info-input-group">
                                <label htmlFor="lastName" className="personal-info-label">last name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="personal-info-input-style"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* email */}
                        <div className="col-12">
                            <div className="personal-info-input-group">
                                <label htmlFor="email" className="personal-info-label">e-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="personal-info-input-style"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* phone */}
                        <div className="col-md-6">
                            <div className="personal-info-input-group">
                                <label htmlFor="phoneNumber" className="personal-info-label">phone</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    className="personal-info-input-style"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* gender */}
                        <div className="col-md-6">
                            <div className="personal-info-input-group">
                                <label htmlFor="gender" className="personal-info-label">gender</label>
                                <input
                                    type="text"
                                    id="gender"
                                    name="gender"
                                    className="personal-info-input-style"
                                    value={formData.gender}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* update button */}
                        <div className="col-12 text-center text-md-start mt-5">
                            <button type="submit" className="personal-info-update-btn">
                                update change
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PersonalInfo;
