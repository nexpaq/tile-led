import Color from 'color';

const predefinedColors = {
  red: { 
    uiColor: Color.rgb(238, 54, 54),
    moduleColor: Color('red')
  },
  green: { 
    uiColor: Color.rgb(1, 207, 88),
    moduleColor: Color('green')
  },
  blue: { 
    uiColor: Color.rgb(17, 169, 255),
    moduleColor: Color('blue')
  },
  yellow: { 
    uiColor: Color.rgb(252, 187, 64),
    moduleColor: Color('yellow')
  },
  white: { 
    uiColor: Color.rgb(255, 255, 255),
    moduleColor: Color('white')
  }
};

console.log('hello from predefined-colors.js');

export default predefinedColors;