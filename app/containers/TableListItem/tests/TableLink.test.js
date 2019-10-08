import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import TableLink from '../TableLink';

describe('<TableLink />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(<TableLink />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have a className attribute', () => {
    const { container } = render(<TableLink />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<TableLink id={id} />);
    expect(container.firstChild.hasAttribute('id')).toBe(true);
    expect(container.firstChild.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<TableLink attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});
