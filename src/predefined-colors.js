import Color from 'color';

const predefinedColors = {
  red: { 
    uiColor: Color.rgb(238, 54, 54),
		moduleColor: Color('red'),
		uiColorString: 'rgb(238, 54, 54)',
		uiColorName: 'red'
  },
  green: { 
    uiColor: Color.rgb(1, 207, 88),
		moduleColor: Color('green'),
		uiColorString: 'rgb(1, 207, 88)',
		uiColorName: 'green'
  },
  blue: { 
    uiColor: Color.rgb(17, 169, 255),
		moduleColor: Color('blue'),
		uiColorString: 'rgb(17, 169, 255)',
		uiColorName: 'blue'
  },
  yellow: { 
    uiColor: Color.rgb(252, 187, 64),
		moduleColor: Color('yellow'),
		uiColorString: 'rgb(252, 187, 64)',
		uiColorName: 'yellow'
  },
  white: { 
    uiColor: Color.rgb(255, 255, 255),
		moduleColor: Color('white'),
		uiColorString: 'rgb(255, 255, 255)',
		uiColorName: 'white'
  }
};

export default predefinedColors;