import { create } from '@storybook/theming/create';

export default create({
  brandTitle: 'Kaizoku Labs UI Storybook',
  brandUrl: 'https://github.com/kaizokulabs',
  brandImage: 'https://ui.kaizokulabs.com/logo-nobg.png',
  brandTarget: '_self',
  base: 'light',

  colorPrimary: '#212040',
  colorSecondary: '#F28095',

  // UI
  appBg: '#212040',
  appContentBg: 'rgba(30,32,64,0.8)',

  // Text colors
  textColor: '#F2DCC2',

  // Toolbar default and active colors
  barTextColor: '#F2DCC2',
  barBg: '#212040',

  // Form colors
  booleanBg: 'rgba(30,32,64,0.1)',
  booleanSelectedBg: '#212040',
  inputBg: '#F0F0F0',
  inputTextColor: '#212040',
  inputBorderRadius: 6,
});
