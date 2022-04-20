import jwt from 'jsonwebtoken';

import token from '../../config/authenticate.json';

function generateToken(payload: object = {}) {
  return jwt.sign({ payload }, token.secret, {
    expiresIn: 86400,
  });
}

export default generateToken;
