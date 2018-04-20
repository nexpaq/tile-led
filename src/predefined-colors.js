import Color from 'color';

const predefinedColors = {
  red: { 
    uiColor: Color.rgb(255, 70, 70),
    moduleColor: Color('red')
  },
  green: { 
    uiColor: Color.rgb(64, 215, 139),
    moduleColor: Color('green')
  },
  blue: { 
    uiColor: Color.rgb(0, 191, 222),
    moduleColor: Color('blue')
  },
  yellow: { 
    uiColor: Color.rgb(251, 236, 0),
    moduleColor: Color('yellow')
  },
  white: { 
    uiColor: Color.rgb(255, 255, 255),
    moduleColor: Color('white')
  }
};

export default predefinedColors;