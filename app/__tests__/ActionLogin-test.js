import {
  POST_API_LOGIN_SUCCESS,
  POST_API_LOGIN_ERROR,
  RESET,
  POST_API_LOGIN,
  apiPostLogin
} from "../actions/apiLogin";
import reducer from "../reducers/apiLogin";

import {
  CLIENT_ID,
  CLIENT_SECRET,
  SCOPES,
  NOTE
} from "../helpers/githubAppClient";

describe("actions login", () => {
  const email = "eduardo.hensantos@gmail.com";
  const password = "admin123";

  const request = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    scopes: SCOPES,
    note: NOTE
  };

  it("should reset login state", () => {
    const currentState = {
      email,
      password,
      isApiSubmiting: false,
      apiResultData: { sucesso: "Usuário logado com sucesso" }
    };

    const expectedAction = {
      email: null,
      password: null,
      isApiSubmiting: false,
      apiResultData: null
    };

    expect(reducer(currentState, { type: RESET })).toEqual(expectedAction);
  });

  it("should create an action to login user", () => {
    const expectedAction = {
      type: POST_API_LOGIN,
      email,
      password,
      request
    };

    expect(apiPostLogin(email, password, request)).toEqual(expectedAction);
  });

  it("should start login API call", () => {
    const currentState = {
      email,
      password,
      isApiSubmiting: false,
      apiResultData: null
    };

    const expectedAction = {
      ...currentState,
      isApiSubmiting: true,
      apiResultData: null
    };

    expect(reducer(currentState, apiPostLogin(request))).toEqual(
      expectedAction
    );
  });

  it("should return login API success", () => {
    const sagaSuccessResult = {
      auth: true
    };

    const currentState = {
      email,
      password,
      isApiSubmiting: true,
      apiResultData: null
    };

    const expectedAction = {
      ...currentState,
      isApiSubmiting: false,
      apiResultData: sagaSuccessResult
    };

    expect(
      reducer(currentState, { type: POST_API_LOGIN_SUCCESS, sagaSuccessResult })
    ).toEqual(expectedAction);
  });

  it("should return login API error", () => {
    const sagaErrors = {
      error: "Usuário não encontrado"
    };

    const currentState = {
      email,
      password,
      isApiSubmiting: true,
      apiResultData: null
    };

    const expectedAction = {
      ...currentState,
      isApiSubmiting: false,
      apiResultData: sagaErrors
    };

    expect(
      reducer(currentState, { type: POST_API_LOGIN_ERROR, sagaErrors })
    ).toEqual(expectedAction);
  });
});
