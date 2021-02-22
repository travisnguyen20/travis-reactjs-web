import * as React from 'react';
import { render } from '@testing-library/react';

import { MenuItem } from '..';

describe('<MenuItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<MenuItem title="Dashboard" to="" />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
