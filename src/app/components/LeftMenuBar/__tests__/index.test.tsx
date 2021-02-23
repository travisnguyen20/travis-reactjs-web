import * as React from 'react';
import { render } from '@testing-library/react';

import { LeftMenuBar } from '..';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

describe('<LeftMenuBar  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <LeftMenuBar />
        </BrowserRouter>
      </ThemeProvider>,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
