/**
 *
 * LeftMenuBar
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import logo from 'assets/img.png';
import { MenuItem } from '../MenuItem';

interface Props {}

export function LeftMenuBar(props: Props) {
  const menuItems = [
    {
      title: 'Dashboard',
      to: '/',
    },
    {
      title: 'Users',
      to: '/users',
    },
  ];

  return (
    <Div className="min-vh-100 position-fixed">
      <div className="m-5 text-center">
        <img src={logo} alt="logo" className="w-50" />
      </div>
      <div className="d-flex flex-column p-5">
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} title={menuItem.title} to={menuItem.to} />
        ))}
      </div>
    </Div>
  );
}

const Div = styled.div`
  width: 300px;
  background: ${props => props.theme.colors.primaryBlue};
`;
