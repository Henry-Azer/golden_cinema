import {
    USERS_LIST_REQUEST,
    USERS_LIST_SUCCEEDED,
    USERS_LIST_ERROR,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCEEDED,
    REGISTRATION_ERROR,
    CLEAR_REGISTRATION_DETAILS,
} from "../actions/types";

export default function users_reducer(state = {}, action) {
    switch (action.type) {
        // USERS LIST
        case USERS_LIST_REQUEST:
            return { ...state, usersListRequest: true };
        case USERS_LIST_SUCCEEDED:
            return {
                ...state,
                usersList: action.payload,
                usersListRequest: false,
            };
        case USERS_LIST_ERROR:
            return {
                ...state,
                usersListError: action.payload,
                usersListRequest: false,
            };

        // REGISTRATION
        case REGISTRATION_REQUEST:
            return { ...state, registrationRequest: true };
        case REGISTRATION_SUCCEEDED:
            return {
                ...state,
                registeredUser: action.payload,
                registrationRequest: false,
                registrationSucceeded: true,
            };
        case REGISTRATION_ERROR:
            return {
                ...state,
                registrationError: action.payload,
                registrationRequest: false,
                registrationSucceeded: false,
            };
        case CLEAR_REGISTRATION_DETAILS:
            return {
                ...state,
                registeredUser: action.payload,
            };
        default:
            return state;
    }
}
