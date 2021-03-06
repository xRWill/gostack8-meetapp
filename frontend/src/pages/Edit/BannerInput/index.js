import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';

import { MdCameraAlt } from 'react-icons/md';
import { Container, ImageSelect } from './styles';

import api from '~/services/api';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('File');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
        clearValue: pickerRef => {
          pickerRef.clear();
        },
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {preview ? (
          <img src={preview} alt="banner" />
        ) : (
          <ImageSelect>
            <MdCameraAlt size={36} color="rgba(255,255,255,0.4)" />
            <strong>Selecionar imagem</strong>
          </ImageSelect>
        )}
        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          ref={ref}
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
