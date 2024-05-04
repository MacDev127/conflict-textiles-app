import React from "react";
import { useForm } from "@inertiajs/react";
import "./CreateUser.css";

const CreateUser = () => {
    const { data, setData, post } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role_id: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("users.create"), {
            onSuccess: () => {},
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    const handleInputChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="create-user-form">
                <h2 className="create-user__title">Create User</h2>
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleInputChange}
                        placeholder="Full name"
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleInputChange}
                        placeholder="Email address"
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="password_confirmation">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onChange={handleInputChange}
                        placeholder="Confirm Password"
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="role_id">Role</label>
                    <input
                        type="number"
                        name="role_id"
                        value={data.role_id}
                        onChange={handleInputChange}
                        placeholder="Role ID"
                    />
                </div>
                <button className="create-user__button" type="submit">
                    Create User
                </button>
            </form>
        </>
    );
};

export default CreateUser;
