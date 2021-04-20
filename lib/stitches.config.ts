import createStyled from '@stitches/react'

export const { styled, css, global } = createStyled({
  prefix: '',
  utils: {},
  conditions: {
    bp1: '@media (max-width: 640px)',
    bp2: '@media (min-width: 768px)',
    bp3: '@media (min-width: 1024px)',
  }
})

const myGlobal = global({
  body: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
    padding: 0,
    margin: 0,
    boxSizing: 'border-box'
  },
  '::selection': {
    backgroundColor: '#2EA10B',
    color: 'white'
  },
  a: {
    '-webkit-userSelect': 'none',
    '-webkit-userDrag': 'none',
    color: '#2EA10B !important',
    textDecoration: 'underline !important'
  },
  img: {
    'max-width': '100%',
    'max-height': '100%'
  },
  'p > code': {
    fontSize: '1em',
    margin: '0.1em',
    fontFamily: 'inherit',
    color: '#2EA10B'
  },
  'li > code': {
    fontSize: '1em',
    margin: '0.1em',
    fontFamily: 'inherit',
    color: '#2EA10B'
  },
  'ul': {
    paddingInlineStart: 25
  }
})

myGlobal()
