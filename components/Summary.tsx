import { styled } from '../lib/stitches.config'

export const Summary = styled('div', {
  padding: '1em',
  height: '100%',
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  when: {
    bp3: {
      width: '820px'
    }
  }
})

export const SummaryCard = styled('div', {
  paddingTop: '0.5em',
  paddingLeft: '1em',
  paddingRight: '1em',
  paddingBottom: '1em',
  margin: '0.5em auto',
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '1px solid black',
  '&:last-child': {
    border: 'none'
  }
})

export const SummaryTitle = styled('h2', {
  margin: '0.3em',
  cursor: 'pointer'
})

export const SummaryDate = styled('p', {
  color: 'darkgray',
  fontSize: '1em',
  margin: '0.5em'
})

export const SummaryContent = styled('div', {
  color: '#111',
  margin: '0.5em',
  fontSize: '1em',
  lineHeight: '2em'
})

export const SummaryReadMore = styled('div', {
  marginTop: '1em',
  marginRight: '0.5em',
  marginLeft: '0.5em',
  marginBottom: '0.5em',
  color: '#2EA10B',
  fontWeight: 400,
  cursor: 'pointer',
  '-webkit-userSelect': 'none',
  '-webkit-userDrag': 'none'
})
