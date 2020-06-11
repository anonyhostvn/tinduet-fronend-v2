import Axios from 'axios';
import {urlBackend} from "../constant/url.constant";

export const requestSignInWithEmailPassword = (email, password) => Axios.post(`${urlBackend}/login`, {username: email, password}, {});

export const requestSignUpWithEmailPassword = (email, password, name) => Axios.post(`${urlBackend}/register`, {username: email, password, name}, {});
