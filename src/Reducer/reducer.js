export const reducer = (state, action) =>{
    switch (action.type) {
        case "GET_DENTISTA": 
            return{...state, dentista: action.payload};
        case "ADD_FAV": 
                return{...state, favs:[...state.favs, action.payload]};
        case "DELETE_FAV": 
            const filterFavs = state.favs.filter(
                (fav)=> action.payload.id !== fav.id
            )
            return{...state, favs: filterFavs};                
        case "TOGGLE_THEME": 
            return{...state, theme: state.theme === "dark" ? "light" : "dark",};
        default:
            break;
    }
}