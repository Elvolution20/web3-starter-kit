export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const shortenAddress = (address: string) => {
  if (address && address.length >= 8) {
    return `${address.slice(0, 5)}...${address.slice(address.length - 3, address.length)}`
  } else {
    return address
  }
}

export const kFormatter = (num: number, digits?: number) => {
  var si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  var i
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break
    }
  }
  return (num / si[i].value).toFixed(digits ? digits : 0).replace(rx, '$1') + si[i].symbol
}
