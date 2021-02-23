/**
 *
 * MenuItem
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

interface Props {
  title: string;
  to: string;
}

export function MenuItem(props: Props) {
  const { title, to } = props;

  return (
    <Link exact to={to} activeClassName="menu-item--active" className="py-1">
      {title}
    </Link>
  );
}

const Link = styled(NavLink)`
  color: ${props => props.theme.colors.white};
  opacity: 0.5;
  transition: 0.15s;

  &:hover,
  &.menu-item--active {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    opacity: 1;
  }
`;
