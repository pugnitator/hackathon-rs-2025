import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { sendUserToServer } from "../../hooks/use-send-user-to-server.js";
import { useForm } from "../../hooks/use-form.js";

export const CreateUser = () => {
    const navigate = useNavigate();

    const { formData, handleChange, resetForm } = useForm({
        id: "",
        name: "",
        lastname: "",
        age: "",
        image_url: "",
        about: "",
        contact: "",
        occupation: "",
        HTML: "",
        CSS: "",
        JS: "",
        badge: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            ...formData,
            id: Math.floor(Math.random() * 1000),
        };

        await sendUserToServer(newUser);

        console.log("Новый пользователь:", newUser);

        resetForm();

        navigate("/");
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastname"
                placeholder="Фамилия"
                value={formData.lastname}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                placeholder="Возраст"
                value={formData.age}
                onChange={handleChange}
            />
            <input
                type="text"
                name="image_url"
                placeholder="URL изображения"
                value={formData.image_url}
                onChange={handleChange}
            />
            <textarea
                name="about"
                placeholder="О себе"
                value={formData.about}
                onChange={handleChange}
            ></textarea>
            <input
                type="text"
                name="contact"
                placeholder="Контакт"
                value={formData.contact}
                onChange={handleChange}
            />
            <input
                type="text"
                name="occupation"
                placeholder="Занятие"
                value={formData.occupation}
                onChange={handleChange}
            />
            <input
                type="number"
                name="HTML"
                placeholder="HTML (%)"
                value={formData.HTML}
                onChange={handleChange}
            />
            <input
                type="number"
                name="CSS"
                placeholder="CSS (%)"
                value={formData.CSS}
                onChange={handleChange}
            />
            <input
                type="number"
                name="JS"
                placeholder="JavaScript (%)"
                value={formData.JS}
                onChange={handleChange}
            />
            <input
                type="text"
                name="badge"
                placeholder="Бейдж"
                value={formData.badge}
                onChange={handleChange}
            />
            <button type="submit">Добавить пользователя</button>
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
