const zeroPaddingDateString = (dateNumber: number) => {
  return ('00' + dateNumber.toString()).slice(-2)
}

// const JST_DELTA = 9 * 60 * 60 * 1000
export const formatJapaneseDateString = (date: Date, delta = 0) => {
  const localeDate = new Date(date.getTime() + delta)
  return `${localeDate.getUTCFullYear()}年${zeroPaddingDateString(
    localeDate.getUTCMonth() + 1
  )}月${zeroPaddingDateString(localeDate.getUTCDate())}日`
}
