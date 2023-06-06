const spacing = () => {
  const obj = { px: '1px' }
  for(var i=0; i<=15; i+=0.5){
    obj[i.toString()] = `${i*0.625}rem`;
  }
  return obj;
}
const fontSize = () => {
  const obj = {};
  for(var i=1; i<=5; i+=0.1){
    obj[i.toFixed(1)] = `${(i*0.625).toFixed(4)}rem`;
  }
  console.log("%%%%%%%%%%%", obj);
  return obj;
}
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: '#1427C8',
        orange: '#FF7D19',
        pink: '#FFA2B8',
        grey: {
          dark: '#5E5E5E',
          DEFAULT: '#F1F2FB',
          light: '#E1E1E1'
        },
        'off-white': '#F2F2F2'
      },
    },
    spacing: spacing(),
    fontSize: fontSize(),
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    fontFamily: {
      heading: ['Sofia Pro', 'serif'],
      body: ['Apercu', 'sans-serif']
    }
  },
  plugins: []
}