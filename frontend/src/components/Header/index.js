import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile, Logout } from './styles';
import logo from '~/assets/logo.svg';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="GoMeetApp" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <Logout onClick={handleSignOut}>Sair</Logout>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
