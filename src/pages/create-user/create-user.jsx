import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { sendUserToServer } from "../../hooks/use-send-user-to-server.js";
import { useForm } from "../../hooks/use-form.js";
import { userValidationSchema } from "../../hooks/use-user-valid-schema.js";
import {ButtonSmart} from "../../components/ui/button/button-smart.jsx";

export const CreateUser = () => {
    const navigate = useNavigate();

    const { formData, errors, handleChange, validateForm, resetForm } = useForm(
        {
            id: "",
            name: "",
            lastname: "",
            age: null,
            image_url: "",
            about: "",
            contact: "",
            occupation: "",
            HTML: "",
            CSS: "",
            JS: "",
            badge: "",
        },
        userValidationSchema
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = await validateForm();
        if (!isValid) return;

        const newUser = {
            ...formData,
            id: Math.floor(Math.random() * 1000),
        };

        await sendUserToServer(newUser);

        console.log("Новый пользователь:", newUser);

        resetForm();

        navigate("/");
    };

    const isValid = Object.keys(errors).length !== 0;

    return (
        <FormContainer onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
            />
            {errors.name && <Error>{errors.name}</Error>}
            <input
                type="text"
                name="lastname"
                placeholder="Фамилия"
                value={formData.lastname}
                onChange={handleChange}
            />
            {errors.lastname && <Error>{errors.lastname}</Error>}
            <input
                type="number"
                name="age"
                placeholder="Возраст"
                value={formData.age}
                onChange={handleChange}
            />
            {errors.age && <Error>{errors.age}</Error>}
            <input
                type="text"
                name="image_url"
                placeholder="URL изображения"
                value={formData.image_url}
                onChange={handleChange}
            />
            {errors.image_url && <Error>{errors.image_url}</Error>}
            <textarea
                name="about"
                placeholder="О себе"
                value={formData.about}
                onChange={handleChange}
            ></textarea>
            {errors.about && <Error>{errors.about}</Error>}
            <input
                type="text"
                name="contact"
                placeholder="Контакт"
                value={formData.contact}
                onChange={handleChange}
            />
            {errors.contact && <Error>{errors.contact}</Error>}
            <input
                type="text"
                name="occupation"
                placeholder="Занятие"
                value={formData.occupation}
                onChange={handleChange}
            />
            {errors.occupation && <Error>{errors.occupation}</Error>}
            <input
                type="number"
                name="HTML"
                placeholder="HTML (%)"
                value={formData.HTML}
                onChange={handleChange}
            />
            {errors.HTML && <Error>{errors.HTML}</Error>}
            <input
                type="number"
                name="CSS"
                placeholder="CSS (%)"
                value={formData.CSS}
                onChange={handleChange}
            />
            {errors.CSS && <Error>{errors.CSS}</Error>}
            <input
                type="number"
                name="JS"
                placeholder="JavaScript (%)"
                value={formData.JS}
                onChange={handleChange}
            />
            {errors.JS && <Error>{errors.JS}</Error>}
            <input
                type="text"
                name="badge"
                placeholder="Бейдж"
                value={formData.badge}
                onChange={handleChange}
            />
            {errors.badge && <Error>{errors.badge}</Error>}
            <ButtonSmart
                color="#6C63FF"
                onClick={() => handleSubmit()}
                text="Создать"
            />
        </FormContainer>
    );
};

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 10px;
`;

const Error = styled.div`
  color: red;
  font-size: 12px;
`;
