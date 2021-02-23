import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';

import { UserPage } from '..';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    location: {
      search: '',
    },
  }),
}));

jest.mock('services/user.service', () => ({
  UserService: {
    getAllUsers: () =>
      Promise.resolve({
        data: {
          results: [
            {
              gender: 'female',
              name: { title: 'Mrs', first: 'Caroline', last: 'Christensen' },
              location: {
                street: { number: 5520, name: 'Nyvangsvej' },
                city: 'Stenderup',
                state: 'Hovedstaden',
                country: 'Denmark',
                postcode: 30524,
                coordinates: { latitude: '-36.9890', longitude: '26.5844' },
                timezone: { offset: '+4:30', description: 'Kabul' },
              },
              email: 'caroline.christensen@example.com',
              login: {
                uuid: '218a89c2-3128-4d45-85f6-bfad969e26e2',
                username: 'happypanda955',
                password: 'yvette',
                salt: 'gkH3rvVw',
                md5: 'aa6d6310a01a4bf14006dd7070a30205',
                sha1: '2bc88926a4db8ed78151401ac4b07bba01cd17a1',
                sha256:
                  'cd292506e5ecaa7243564ad58c215bc596c3ff3d27c83e82185a9fd891e1e7b7',
              },
              dob: { date: '1978-12-11T12:14:52.806Z', age: 43 },
              registered: { date: '2017-05-16T05:42:40.205Z', age: 4 },
              phone: '36913813',
              cell: '47542885',
              id: { name: 'CPR', value: '111278-4414' },
              picture: {
                large: 'https://randomuser.me/api/portraits/women/57.jpg',
                medium: 'https://randomuser.me/api/portraits/med/women/57.jpg',
                thumbnail:
                  'https://randomuser.me/api/portraits/thumb/women/57.jpg',
              },
              nat: 'DK',
            },
          ],
          info: {
            seed: 'c9d647b86c06e537',
            results: 1,
            page: 1,
            version: '1.3',
          },
        },
      }),
  },
}));

const renderComponent = store => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <UserPage />
      </ThemeProvider>
    </Provider>,
  );
};

describe('<UserPage  />', () => {
  let store: Store;
  beforeEach(() => {
    store = configureAppStore();
  });
  it('should match snapshot', () => {
    const loadingIndicator = renderComponent(store);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
  it('should render the list of user when call api successfully', async () => {
    const loadingIndicator = renderComponent(store);

    await waitFor(async () => {
      expect(
        loadingIndicator.getByText('Mrs. Caroline Christensen'),
      ).toBeInTheDocument();
      expect(loadingIndicator.getByText('happypanda955')).toBeInTheDocument();
      expect(
        loadingIndicator.container.querySelector(
          '[src="https://randomuser.me/api/portraits/thumb/women/57.jpg"]',
        ),
      ).toBeInTheDocument();
    });
  });
});
