import * as React from 'react';
import { render } from '@testing-library/react';

import { LeftMenuBar } from '..';

describe('<LeftMenuBar  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<LeftMenuBar />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
