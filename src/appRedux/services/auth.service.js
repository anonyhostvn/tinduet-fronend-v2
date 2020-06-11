import Axios from 'axios';
import {urlBackend} from "../constant/url.constant";

export const requestSignInWithEmailPassword = (email, password) => Axios.post(`${urlBackend}/login`, {username: email, password}, {});
