export const addStorage = (id) => {

    let favorites = JSON.parse(localStorage.getItem('storage')) || [];

    if (favorites.includes(id)) {
        favorites = favorites.filter((item) => item !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('storage', JSON.stringify(favorites));
    console.log(localStorage.getItem("favorites"));
}