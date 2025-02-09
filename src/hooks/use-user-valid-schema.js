import * as Yup from "yup";

export const userValidationSchema = Yup.object().shape({
    name: Yup.string().required("обязательно"),
    lastname: Yup.string().required("обязательно"),
    age: Yup
        .number()
        .required("обязательно")
        .min(1, "больше 14"),
    image_url: Yup.string().url("URL"),
    about: Yup.string().required("информация обязательна"),
    contact: Yup.string().required("контакт обязателен"),
    occupation: Yup.string().required("занятие обязательно"),
    HTML: Yup.number()
        .nullable()
        .transform((value, originalValue) => {
            return originalValue === "" ? null : value;
        })
        .min(0, "больше или равно 0")
        .max(100, "меньше или равно 100"),
    CSS: Yup.number()
        .nullable()
        .transform((value, originalValue) => {
            return originalValue === "" ? null : value;
        })
        .min(0, "больше или равно 0")
        .max(100, "меньше или равно 100"),
    JS: Yup.number()
        .nullable()
        .transform((value, originalValue) => {
            return originalValue === "" ? null : value;
        })
        .min(0, "больше или равно 0")
        .max(100, "меньше или равно 100"),
    badge: Yup.string().required("бейдж обязателен"),
});
