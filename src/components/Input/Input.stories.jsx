import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input.jsx';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

storiesOf('Input', module)
  .add('Primário', () => (
    <Input
      showIcon
      icon={<SearchIcon />}
      placeholder="SEARCH"
      fontColor="#FAFAFA"
    />
  ))
