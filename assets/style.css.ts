import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  lineHeight: 0.9,
  color: '#fff',
  fontWeight: 800,
});

export const gridName = style({
  fontSize: 'clamp(7.5rem, 2.7532rem + 15.1899vw, 15rem)',
  display: 'inline-flex',
});

export const gridLastname = style({
  fontSize: 'clamp(7.5rem, 2.7532rem + 15.1899vw, 15rem);',
  alignContent: 'stretch',
  display: 'inline-flex',
});

export const letterHover = style({
  display: 'inline-block',
  transition: 'transform 0.2s ease',
  transitionDelay: '0.2s',
  willChange: 'transform',

})


for (let i = 0; i < 'Paul'.length; i++) {
  globalStyle(`${gridName}:hover > ${letterHover}:nth-child(${i + 1})`, {
    transform: 'rotateX(180deg)',
    transition: 'transform 0.5s ease',
    transitionDelay: `0.${i}s`,
  })
}


for (let i = 0; i < 'Nallet'.length; i++) {
  globalStyle(`${gridLastname}:hover > ${letterHover}:nth-child(${i + 1})`, {
    transform: 'rotateX(180deg)',
    transition: 'transform 0.5s ease',
    transitionDelay: `0.${i}s`,
  })
}