import * as React from 'react';
import { render } from '@testing-library/react';

import { Header } from '..';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

describe('<Header  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
