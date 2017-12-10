import Auth0 from 'react-native-auth0';
const credentials = require('../../auth0-credentials');
const auth0 = new Auth0(credentials);

export const login = () => (
  auth0.webAuth
  .authorize({
    scope: 'openid profile',
    audience: 'https://' + credentials.domain + '/userinfo'
  })
);

export const logout = () => (
  auth0.webAuth.clearSession({})
);

export const getUserProfile = (accessToken) => (
  auth0.auth.userInfo({'token': accessToken})
);
