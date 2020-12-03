import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const req = require.context('../src/', true, /stories.(js|jsx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
window.$RefreshReg$ = () => {};
window.$RefreshSig$ = () => () => {};
addDecorator(withInfo);

addDecorator(story => (
  <div className="storybook-content">
    {story()}
  </div>
));

configure(loadStories, module);
