import 'reset-css/reset.css';
import './sass/styles.scss';

import headerPickerIcon from './img/picker_black.svg';

import 'webview-tile-header/WebViewTileHeader.js';

document.addEventListener('DOMContentLoaded', () => {
  /* Revealing UI */
  //document.getElementById('wrapper').style.opacity = 1;

  Nexpaq.Header.create('LED');
  //Header Customization
  const headerStyles = {
    backgroundColor: '#FFFFFF',
    color: 'black',
    iconColor: 'black',
    borderBottom: 'none'
  };
  Nexpaq.Header.customize(headerStyles);
  Nexpaq.Header.addButton({ image: headerPickerIcon }, pickerClickHandler);
});

function pickerClickHandler() {}