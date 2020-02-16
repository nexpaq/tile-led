import Color from 'color';

const predefinedColors = {
  red: { 
    uiColor: Color.rgb(238, 54, 54),
		moduleColor: Color('red'),
		uiColorString: 'rgb(238, 54, 54)'
  },
  green: { 
    uiColor: Color.rgb(1, 207, 88),
		moduleColor: Color('green'),
		uiColorString: 'rgb(1, 207, 88)'
  },
  blue: { 
    uiColor: Color.rgb(17, 169, 255),
		moduleColor: Color('blue'),
		uiColorString: 'rgb(17, 169, 255)'
  },
  yellow: { 
    uiColor: Color.rgb(252, 187, 64),
		moduleColor: Color('yellow'),
		uiColorString: 'rgb(252, 187, 64)'
  },
  white: { 
    uiColor: Color.rgb(255, 255, 255),
		moduleColor: Color('white'),
		uiColorString: 'rgb(255, 255, 255)'
  }
};

export default predefinedColors;