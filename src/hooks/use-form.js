import { useState } from "react";

export const useForm = (initialState, validationSchema) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            validateField(name, value);
        }
    };

    const validateField = async (name, value) => {
        try {
            await validationSchema.validateAt(name, { [name]: value });
            setErrors((prevErrors) => {
                const { [name]: _, ...rest } = prevErrors;
                return rest;
            });
        } catch (error) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: error.message,
            }));
        }
    };

    const validateForm = async () => {
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            setErrors({});
            return true;
        } catch (error) {
            const validationErrors = {};
            error.inner.forEach((err) => {
                validationErrors[err.path] = err.message;
            });
            setErrors(validationErrors);
            return false;
        }
    };

    const resetForm = () => {
        setFormData(initialState);
        setErrors({});
    };

    return {
        formData,
        errors,
        handleChange,
        validateForm,
        resetForm,
    };
};
