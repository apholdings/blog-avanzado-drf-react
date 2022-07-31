import axios from 'axios';
import {
    GET_BLOG_LIST_SUCCESS,
    GET_BLOG_LIST_FAIL,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAIL,
    GET_BLOG_LIST_CATEGORIES_SUCCESS,
    GET_BLOG_LIST_CATEGORIES_FAIL,
    GET_SEARCH_BLOG_SUCCESS,
    GET_SEARCH_BLOG_FAIL
} from "./types"

export const get_blog_list = () => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BLOG_LIST_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_BLOG_LIST_FAIL
        });
    }
}

export const get_blog_list_page = (p) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/?p=${p}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BLOG_LIST_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_BLOG_LIST_FAIL
        });
    }
}

export const get_blog_list_category = (category_id) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/category/${category_id}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_BLOG_LIST_CATEGORIES_FAIL
        });
    }
}


export const get_blog_list_category_page = (category_id,p) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/category/${category_id}?p=${p}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_BLOG_LIST_CATEGORIES_FAIL
        });
    }
}

export const get_blog = (slug) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BLOG_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_BLOG_FAIL
        });
    }
};

export const search_blog = (search_term) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/search/${search_term}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_SEARCH_BLOG_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_SEARCH_BLOG_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_SEARCH_BLOG_FAIL
        });
    }
};