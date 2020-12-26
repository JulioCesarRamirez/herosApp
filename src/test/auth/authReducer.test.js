import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('testing authReducer', () => {
  it('should return the state by default', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });
  it('should athenticate and save user name', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Doncan',
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, name: 'Doncan' });
  });
  it('should delete user name and logged should be false', () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer({ logged: true }, action);
    expect(state).toEqual({ logged: false });
  });
});
