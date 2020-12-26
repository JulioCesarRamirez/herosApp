import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { LoginScreen } from '../../components/login/LoginScreen';
import { types } from '../../types/types';

describe('Testing <LoginScreen/> ', () => {
  const hisotry = {
    replace: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={hisotry} />
    </AuthContext.Provider>
  );

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should do dispatch and navigation', () => {
    const handleClick = wrapper.find('button').prop('onClick');

    handleClick();

    expect(contextValue.dispatch).toHaveBeenLastCalledWith({
      type: types.login,
      payload: {
        name: 'Julio',
      },
    });
    expect(hisotry.replace).toHaveBeenCalledWith('/');
    localStorage.setItem('lastPath', '/dc');
    handleClick();
    expect(hisotry.replace).toHaveBeenCalledWith('/dc');
  });
});
