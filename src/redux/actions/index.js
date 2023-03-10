import axios from 'axios';
const GET_RECIPES = 'GET_RECIPES';
const GET_RECIPE_BY_ID = 'GET_RECIPE_BY_ID';
const GET_RECIPES_BY_NAME = 'GET_RECIPES_BY_NAME';
const GET_TYPE_DIETS = 'GET_TYPE_DIETS';
const ORDER_BY_NAME = 'ORDER_BY_NAME';
const ORDER_BY_SCORE = 'ORDER_BY_SCORE';
const ORDER_BY_TYPE_DIET = 'ORDER_BY_TYPE_DIET'


// export const  = () => {
//     return function (dispatch) {
//         axios.get(`/recipes`)
//             .then((json) => {
//                 return dispatch({
//                     type: GET_RECIPES,
//                     payload: json.data
//                 })
//             })
//     }
// }

// export function getRecipes() {
//     return async function (dispatch) {
//         try {
//             return await axios.get(`/recipes`)
//                 .then((json) => {
//                     return dispatch({
//                         type: GET_RECIPES,
//                         payload: json.data
//                     })
//                 })
//         } catch (error) {
//             return {error: error}
//         }
//     };
// }
export function getRecipes() {
    return async function (dispatch) {
        try {
            const recipes = await axios.get(`/recipes`)
             dispatch({
                type: GET_RECIPES,
                payload: recipes.data
            })
        } catch (error) {
            return {error: error}
        }
    };
}

export const getRecipeByID = (id) => {
    return function (dispatch) {
        axios.get(`/recipes/${id}`)
            .then((json) => {
                return dispatch({
                    type: GET_RECIPE_BY_ID,
                    payload: json.data
                })
            })
    }
}
export const getRecipesByName = (name) => {
    return function (dispatch) {
        axios.get(`/recipes?name=${name}`)
            .then((json) => {
                return dispatch({
                    type: GET_RECIPES_BY_NAME,
                    payload: json.data
                })
            })
    }
}
export const getTypesDiets = () => {
    return function (dispatch) {
        axios.get(`/diets`)
            .then((json) => {
                return dispatch({
                    type: GET_TYPE_DIETS,
                    payload: json.data
                })
            })
    }
}
export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}
export const orderByScore = (payload) => {
    return {
        type: ORDER_BY_SCORE,
        payload
    }
}
export const orderByTypeDiet = (payload) => {
    return {
        type: ORDER_BY_TYPE_DIET,
        payload
    }
}

export const postRecipe = (payload) => {
    return async function (dispatch) {
        var json = await axios.post(`/recipe`, payload);
        return json
    }
}
