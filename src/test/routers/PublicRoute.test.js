import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { PubliRoute } from '../../routers/PublicRoute';

describe('Testing <PublicRoute/>', () => {
  const props = {
    location: { pathname: '/marvel' },
  };

  Storage.prototype.setItem = jest.fn();

  it('should show component if user not is authenticated and save it in localstorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PubliRoute
          isAuthenticated={false}
          component={() => <span>Test</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(true);
  });

  it('should not block component if user is  authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PubliRoute
          isAuthenticated={true}
          component={() => <span>Test</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(false);
  });
});
