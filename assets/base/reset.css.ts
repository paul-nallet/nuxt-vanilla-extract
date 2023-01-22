import { globalStyle } from '@vanilla-extract/css'
import { HubotSans } from '@/assets/base/font.css';

globalStyle('*, *::before, *::after',{
    boxSizing: 'border-box',
})

globalStyle('*',{
    margin: 0,
    padding: 0,
});

globalStyle('html, body, #__nuxt',{
    height: '100%',
    backgroundColor: '#000',
});

globalStyle('body',{
    fontFamily: 'sans-serif',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
});

globalStyle('img, picture, video, canvas, svg',{
    display: 'block',
    maxWidth: '100%',
})

globalStyle('input, button, textarea, select', {
    fontFamily: 'inherit',
})

globalStyle('p, h1, h2, h3, h4, h5, h6', {
    wordBreak: 'break-word',
});

globalStyle('#__nuxt', {
    fontFamily: `${HubotSans}, sans-serif`,
    fontWeight: 800,
})


