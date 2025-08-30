import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useLoginForm = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { login, error } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    const user = login(formData);
    if (user) navigate("/admin/dashboard");
    };

    return { formData, handleChange, handleSubmit, error };
};
