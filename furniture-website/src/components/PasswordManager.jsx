import react, { useState } from "react";
// getting updatepassword from useauth hook
import { useAuth } from "../context/AppContext";

const PasswordManager = () => {
    const { updatePassword } = useAuth(); // getting updatepassword from context

    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { currentPassword, newPassword, confirmNewPassword } = formData;

        // 1. new password and confirm password do not match
        if (newPassword !== confirmNewPassword) {
            alert("new password and confirm new password do not match!");
            return;
        }

        // 2. new password should not be same as current password
        if (currentPassword === newPassword) {
            alert("new password must be different from the current password.");
            return;
        }

        // 3. calling updatepassword function from context
        const result = updatePassword(currentPassword, newPassword);

        // 4. handling results
        if (result.success) {
            // show success alert
            alert("password updated successfully.");

            // reset form fields
            setFormData({
                currentPassword: '',
                newPassword: '',
                confirmNewPassword: ''
            });
        } else {
            // failed (wrong current password)
            alert(`password update failed: ${result.message}`);
        }
    };

    return (
        <div className="password-manager-wrapper">
            <form onSubmit={handleSubmit} className="password-manager-form">
                <div className="row g-3">

                    {/* current password field */}
                    <div className="col-12">
                        <div className="password-manager-input-group">
                            <label htmlFor="currentPassword" className="password-manager-label">
                                password*
                            </label>
                            <input
                                type="password"
                                id="currentPassword"
                                name="currentPassword"
                                className="password-manager-input-style"
                                placeholder="enter password"
                                value={formData.currentPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* forgot password link */}
                        <div className="password-manager-forgot-wrapper">
                            <a href="/forgot-password" className="password-manager-forgot-link">
                                forgot password
                            </a>
                        </div>
                    </div>

                    {/* new password field */}
                    <div className="col-12">
                        <div className="password-manager-input-group">
                            <label htmlFor="newPassword" className="password-manager-label">
                                new password*
                            </label>
                            <input
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                className="password-manager-input-style"
                                placeholder="enter password"
                                value={formData.newPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* confirm new password field */}
                    <div className="col-12">
                        <div className="password-manager-input-group">
                            <label htmlFor="confirmNewPassword" className="password-manager-label">
                                confirm new password*
                            </label>
                            <input
                                type="password"
                                id="confirmNewPassword"
                                name="confirmNewPassword"
                                className="password-manager-input-style"
                                placeholder="enter password"
                                value={formData.confirmNewPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* update password button */}
                    <div className="col-12 password-manager-btn-col">
                        <button type="submit" className="password-manager-update-btn">
                            update password
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default PasswordManager;
