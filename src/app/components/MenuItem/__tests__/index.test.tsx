import * as React from 'react';
import { render } from '@testing-library/react';

import { MenuItem } from '..';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { BrowserRouter } from 'react-router-dom';

describe('<MenuItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MenuItem title="Dashboard" to="/" />
        </BrowserRouter>
      </ThemeProvider>,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
