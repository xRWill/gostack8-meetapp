import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import AvatarInput from './AvatarInput';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';

import { updateProfileRequest } from '~/store/modules/user/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório.'),
  email: Yup.string()
    .email('Insira um e-email válido.')
    .required('O e-mail é obrigatório.'),

  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field.required('A senha é obrigatória.').min(6, 'No mínimo 6 dítitos.')
      : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('A confirmação da senha é obrigatória.')
          .oneOf([Yup.ref('password')])
      : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        {/* <AvatarInput name="avatar_id" /> */}
        <Input name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Seu email" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha " />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua nova senha"
        />

        <button type="submit">
          <MdAddCircleOutline /> Salvar perfil
        </button>
      </Form>
    </Container>
  );
}
