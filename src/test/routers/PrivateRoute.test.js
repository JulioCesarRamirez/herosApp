import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Testing <PrivateRoute/>', () => {
  const props = {
    location: { pathname: '/marvel' },
  };

  Storage.prototype.setItem = jest.fn();

  it('should show component if user is authenticated and save it in localstorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Test</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      'lastPath',
      '/marvel'
    );
  });

  it('should block component if user is not authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <span>Test</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(false);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      'lastPath',
      '/marvel'
    );
  });

});
