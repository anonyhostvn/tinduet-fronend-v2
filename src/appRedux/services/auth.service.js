import Axios from 'axios';
import {contextExternal, urlBackend} from "../constant/url.constant";

export const requestSignInWithEmailPassword = (email, password) => Axios.post(`${urlBackend}${contextExternal}/user/login`, {email, password}, {});

export const requestSignUpWithEmailPassword = (email, password, phoneNumber) => Axios.post(`${urlBackend}${contextExternal}/user/register`, {email, password, phoneNumber}, {});
