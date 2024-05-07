import React from 'react';
import styled from 'styled-components';

import { BackIcon, Logo1, UserIcon } from '../../assets/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useOAuthState } from '../../utils/store/useLoginStore';

const NavbarLayout = styled.div`
  max-width: 500px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 24px;
  padding-bottom: 10px;
  background: transparent;
`;
const BackButton = styled.button`
  display: flex;
  margin-bottom: 20px;
  border-width: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LogoIcon = styled.img`
  display: flex;
  align-items: center;
`;

const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
`;
const UserRole = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 52px;
  height: 28px;
  font-family: 'DXSamgakGimbap Light';
  font-size: 15px;
  background-color: white;
`;
const UserName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'DXSamgakGimbap Light';
  font-size: 20px;
`;

const Navbar = () => {
  const { cid, name, email, role } = useOAuthState();

  const navigate = useNavigate();
  const onClickBackButton = () => {
    navigate(-1);
  }

  return (
    <NavbarLayout>
      <BackButton onClick={onClickBackButton}>
        <img src={BackIcon} alt="Back button" />
      </BackButton>
      <HeaderBox>
        <Link to="/">
          <LogoIcon src={Logo1} />
        </Link>
        <UserInfoBox>
          <UserRole>
            {role === 'teacher' ? '선생님' : '학생'}
          </UserRole>
          <UserName>
            {name}
          </UserName>
          <Link to="/">
            <LogoIcon src={UserIcon} />
          </Link>
        </UserInfoBox>
      </HeaderBox>
    </NavbarLayout>
  );
};

export default Navbar;