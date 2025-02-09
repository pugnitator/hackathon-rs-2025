export const sendUserToServer = async (newUser) => {
    try {
        const response = await fetch("http://localhost:3005/devs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });

        if (response.ok) {
            const updatedData = await response.json();
            setDevsData((prev) => [...prev, updatedData]);
        } else {
            console.error("Ошибка при отправке данных:", response.statusText);
        }
    } catch (error) {
        console.error("Ошибка сети:", error);
    }
};