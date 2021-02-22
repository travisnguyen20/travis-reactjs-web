/**
 *
 * Header
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import helpIcon from 'assets/information.svg';
import bellIcon from 'assets/bell.svg';
import chatIcon from 'assets/chat.svg';
import userIcon from 'assets/user.svg';

interface Props {}

export function Header(props: Props) {
  return (
    <Div className="position-fixed d-flex align-items-center justify-content-end p-3">
      <IconButton>
        <img src={helpIcon} alt="help" />
      </IconButton>
      <IconButton>
        <img src={bellIcon} alt="notification" />
      </IconButton>
      <IconButton>
        <img src={chatIcon} alt="chat" />
      </IconButton>
      <IconButton>
        <img src={userIcon} alt="username" />
      </IconButton>
    </Div>
  );
}

const Div = styled.div`
  top: 0;
  right: 0;
  left: 300px;
  height: 80px;
  background: ${props => props.theme.colors.white};
  box-shadow: 1px 1px 10px 2px rgb(0 0 0 / 20%);
`;

const IconButton = styled.div`
  padding: 10px;
  height: 40px;
  width: 40px;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
  }
`;
