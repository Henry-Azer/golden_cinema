import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

import {
    MOVIE_DETAILS_REQUEST,
    MOVIE_DETAILS_SUCCEEDED,
    MOVIE_DETAILS_ERROR,
    NOW_PLAYING_MOVIES_REQUEST,
    NOW_PLAYING_MOVIES_SUCCEEDED,
    NOW_PLAYING_MOVIES_LIST_ERROR,
    MOVIES_LIST_REQUEST,
    MOVIES_LIST_SUCCEEDED,
    MOVIES_LIST_ERROR,
    CLEAR_MOVIE_DETAILS,
} from "../types";

const URL = "http://localhost:8080/api/movie";

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export const moviesList = () => (dispatch) => {
    dispatch({ type: MOVIES_LIST_REQUEST });

    api.get(`${URL}/all`, {
        delay: 0,
    })
        .then((response) =>
            dispatch({
                type: MOVIES_LIST_SUCCEEDED,
                payload: response.data,
            })
        )
        .catch((error) => {
            dispatch({
                type: MOVIES_LIST_ERROR,
                payload: error.data,
            });
        });
};

export const nowPlayingMovies = () => (dispatch) => {
    dispatch({ type: NOW_PLAYING_MOVIES_REQUEST });

    api.get(`${URL}/now-play`, {
        delay: 0,
    })
        .then((response) =>
            dispatch({
                type: NOW_PLAYING_MOVIES_SUCCEEDED,
                payload: response.data,
            })
        )
        .catch((error) => {
            dispatch({
                type: NOW_PLAYING_MOVIES_LIST_ERROR,
                payload: error.data,
            });
        });
};

export const movieDetails = (id) => (dispatch) => {
    dispatch({ type: MOVIE_DETAILS_REQUEST });

    api.get(`${URL}/id/${id}`, {
        delay: 0,
    })
        .then((response) =>
            dispatch({
                type: MOVIE_DETAILS_SUCCEEDED,
                payload: response.data,
            })
        )
        .catch((error) => {
            dispatch({
                type: MOVIE_DETAILS_ERROR,
                payload: error.data,
            });
        });
};

export function clearMovieDetails() {
    return {
        type: CLEAR_MOVIE_DETAILS,
        payload: null,
    };
}
