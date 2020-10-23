import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button.jsx';

storiesOf('Button', module)
  .add('Primário', () => (
    <Button
      onClick={() => {}}
      descricao="Texto"
    />
  ))