import * as React from 'react';
import { render } from '@testing-library/react';

import { Pagination } from '..';

describe('<Pagination  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Pagination />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
