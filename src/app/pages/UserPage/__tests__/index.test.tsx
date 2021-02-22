import * as React from 'react';
import { render } from '@testing-library/react';

import { UserPage } from '..';

describe('<UserPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<UserPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
