import axios from 'axios';
import * as api from '../api'
const url = "https://mem-collection.herokuapp.com/posts";
export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fretchPosts();
        dispatch({ type: "FETCH_ALL", payload: data });
    }
    catch (error) {
        console.log("error", error.message);
    }

}
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        console.log(data);
        dispatch({ type: "CREATE", payload: data });
    }
    catch (error) {
        console.log("error", error.message);
    }

}
export const updatePost = (id, post) => async (dispatch) => {
    try {
        console.log(post);
        const { data } = await axios.patch(`${url}/${id}`, post);

        dispatch({ type: "UPDATE", payload: data });
    } catch (error) {
        console.log("error:", error.message);
    }

}
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: "DELETE", payload: id });
    } catch (error) {
        console.log("error:", error.message);
    }

}
export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: "LIKE", payload: data })
    } catch (error) {
        console.log(error);
    }
}