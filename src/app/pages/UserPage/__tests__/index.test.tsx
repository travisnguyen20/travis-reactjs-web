import * as React from 'react';
import { render } from '@testing-library/react';

import { UserPage } from '..';
import { ThemeProvider } from 'styled-components';
import theme from '../../../../styles/theme';
import { Provider } from 'react-redux';
import { configureAppStore } from '../../../../store/configureStore';

describe('<UserPage  />', () => {
  it('should match snapshot', () => {
    const store = configureAppStore();
    const loadingIndicator = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <UserPage />
        </ThemeProvider>
      </Provider>,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
