import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
  auth,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
  twitterAuthProvider
} from "../../firebase/firebase";
import {
  SIGNIN_FACEBOOK_USER,
  SIGNIN_GITHUB_USER,
  SIGNIN_GOOGLE_USER,
  SIGNIN_TWITTER_USER,
  SIGNIN_USER,
  SIGNOUT_USER,
  SIGNUP_USER
} from "constants/ActionTypes";
import {showAuthMessage, userSignInSuccess, userSignOutSuccess, userSignUpSuccess} from "../../appRedux/actions/Auth";
import {
  userFacebookSignInSuccess,
  userGithubSignInSuccess,
  userGoogleSignInSuccess,
  userTwitterSignInSuccess
} from "../actions/Auth";
import {requestSignInWithEmailPassword, requestSignUpWithEmailPassword} from "../services/auth.service";
import {notification} from "antd";
//
// const createUserWithEmailPasswordRequest = async (email, password) =>
//   await  auth.createUserWithEmailAndPassword(email, password)
//     .then(authUser => authUser)
//     .catch(error => error);
//
// const signInUserWithEmailPasswordRequest = async (email, password) =>
//   await  auth.signInWithEmailAndPassword(email, password)
//     .then(authUser => authUser)
//     .catch(error => error);

const signOutRequest = async () =>
  await  auth.signOut()
    .then(authUser => authUser)
    .catch(error => error);


const signInUserWithGoogleRequest = async () =>
  await  auth.signInWithPopup(googleAuthProvider)
    .then(authUser => authUser)
    .catch(error => error);

const signInUserWithFacebookRequest = async () =>
  await  auth.signInWithPopup(facebookAuthProvider)
    .then(authUser => authUser)
    .catch(error => error);

const signInUserWithGithubRequest = async () =>
  await  auth.signInWithPopup(githubAuthProvider)
    .then(authUser => authUser)
    .catch(error => error);

const signInUserWithTwitterRequest = async () =>
  await  auth.signInWithPopup(twitterAuthProvider)
    .then(authUser => authUser)
    .catch(error => error);

function* createUserWithEmailPassword({payload}) {
  const {email, password, phoneNumber} = payload;
  try {
    const signUpUser = yield call(requestSignUpWithEmailPassword, email, password, phoneNumber);
    if (signUpUser.status === 200) {
      // localStorage.setItem('user_id', signUpUser.data.uid);
      yield put(userSignUpSuccess(signUpUser.data.uid));
      // yield put(showAuthMessage("Sign Up Successfully"))
      notification.success({message: 'Sign Up Successfully'});
    } else {
      yield put(showAuthMessage(signUpUser.message));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* signInUserWithGoogle() {
  try {
    const signUpUser = yield call(signInUserWithGoogleRequest);
    if (signUpUser.message) {
      yield put(showAuthMessage(signUpUser.message));
    } else {
      localStorage.setItem('user_id', signUpUser.user.uid);
      yield put(userGoogleSignInSuccess(signUpUser.user.uid));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}


function* signInUserWithFacebook() {
  try {
    const signUpUser = yield call(signInUserWithFacebookRequest);
    if (signUpUser.message) {
      yield put(showAuthMessage(signUpUser.message));
    } else {
      localStorage.setItem('user_id', signUpUser.user.uid);
      yield put(userFacebookSignInSuccess(signUpUser.user.uid));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}


function* signInUserWithGithub() {
  try {
    const signUpUser = yield call(signInUserWithGithubRequest);
    if (signUpUser.message) {
      yield put(showAuthMessage(signUpUser.message));
    } else {
      localStorage.setItem('user_id', signUpUser.user.uid);
      yield put(userGithubSignInSuccess(signUpUser.user.uid));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}


function* signInUserWithTwitter() {
  try {
    const signUpUser = yield call(signInUserWithTwitterRequest);
    if (signUpUser.message) {
      if (signUpUser.message.length > 100) {
        yield put(showAuthMessage('Your request has been canceled.'));
      } else {
        yield put(showAuthMessage(signUpUser.message));
      }
    } else {
      localStorage.setItem('user_id', signUpUser.user.uid);
      yield put(userTwitterSignInSuccess(signUpUser.user.uid));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* signInUserWithEmailPassword({payload}) {
  const {email, password} = payload;
  try {
    const signInUser = yield call(requestSignInWithEmailPassword, email, password);
    if (signInUser.status === 200) {
      console.log(signInUser);
      localStorage.setItem('user_id', signInUser.data.data.userId);
      localStorage.setItem('name' , signInUser.data.data.profile.name);
      localStorage.setItem('email', signInUser.data.data.profile.email);

      yield put(userSignInSuccess(signInUser.data.data.userId));
    } else {
      yield put(showAuthMessage(signInUser.message));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

function* signOut() {
  try {
    const signOutUser = yield call(signOutRequest);
    if (signOutUser === undefined) {
      localStorage.removeItem('user_id');
      localStorage.removeItem('name');
      localStorage.removeItem('avatar');
      yield put(userSignOutSuccess(signOutUser));
    } else {
      yield put(showAuthMessage(signOutUser.message));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

export function* createUserAccount() {
  yield takeEvery(SIGNUP_USER, createUserWithEmailPassword);
}

export function* signInWithGoogle() {
  yield takeEvery(SIGNIN_GOOGLE_USER, signInUserWithGoogle);
}

export function* signInWithFacebook() {
  yield takeEvery(SIGNIN_FACEBOOK_USER, signInUserWithFacebook);
}

export function* signInWithTwitter() {
  yield takeEvery(SIGNIN_TWITTER_USER, signInUserWithTwitter);
}

export function* signInWithGithub() {
  yield takeEvery(SIGNIN_GITHUB_USER, signInUserWithGithub);
}

export function* signInUser() {
  yield takeEvery(SIGNIN_USER, signInUserWithEmailPassword);
}

export function* signOutUser() {
  yield takeEvery(SIGNOUT_USER, signOut);
}

export default function* rootSaga() {
  yield all([fork(signInUser),
    fork(createUserAccount),
    fork(signInWithGoogle),
    fork(signInWithFacebook),
    fork(signInWithTwitter),
    fork(signInWithGithub),
    fork(signOutUser)]);
}
