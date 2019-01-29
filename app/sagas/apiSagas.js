import { call, put, takeLatest } from "redux-saga/effects";

import base64 from "react-native-base64";

import { updateOAuthAccessToken } from "../helpers/apolloGraphQL";

// ACTIONS
import {
  POST_API_LOGIN,
  POST_API_LOGIN_SUCCESS,
  POST_API_LOGIN_ERROR
} from "../actions/apiLogin";

// URLS
const BASE_URL = "https://api.github.com";

const URL_LOGIN = `${BASE_URL}/authorizations`;

// ACCESS TOKEN
let currentAccessToken = null;

// HEADERS
const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

const headersAuth = headers;
headers.append("Authorization", `basic ${currentAccessToken}`);

// HTTP METHODS
const createPostAuth = request => ({
  method: "POST",
  headers: headersAuth,
  body: JSON.stringify(request)
});

// TOKEN UPDATE
function updateAccessToken(accessToken) {
  if (accessToken) {
    currentAccessToken = accessToken;
    headersAuth.set("Authorization", `basic ${currentAccessToken}`);
  }
}

// GENERAL RESPONSE HANDLER
function* handleCallResponse(
  response,
  actionTypeSuccess,
  actionTypeError,
  updateToken
) {
  try {
    const result = yield response.json();

    if (response.status !== 200 && response.status !== 201) {
      let apiError = result.message
        ? result.message
        : "Ocorreu um erro inesperado. Tente novamente.";

      if (response.status === 408) {
        apiError =
          "O tempo limite da requisição foi atingido. Tente novamente.";
      }

      yield put({
        type: actionTypeError,
        sagaErrors: { error: apiError }
      });
    } else {
      if (updateToken) {
        updateOAuthAccessToken(result.token);
      }

      yield put({ type: actionTypeSuccess, sagaSuccessResult: result });
    }
  } catch (e) {
    yield put({
      type: actionTypeError,
      sagaErrors: { error: e.message }
    });
  }
}

// API FETCH CALLS
const postLogin = request => fetch(URL_LOGIN, createPostAuth(request));

// API EFFECT FUNCTIONS
function* postApiLogin(action) {
  const basicAuthorizationToken = base64.encode(
    `${action.email}:${action.password}`
  );

  updateAccessToken(basicAuthorizationToken);

  const response = yield call(postLogin, action.request);
  yield handleCallResponse(
    response,
    POST_API_LOGIN_SUCCESS,
    POST_API_LOGIN_ERROR,
    true
  );
}

// EXPORTING SAGAS
export const apiSagas = [takeLatest(POST_API_LOGIN, postApiLogin)];

export default apiSagas;
