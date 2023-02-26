export const decomposeAmount = (amount: number) => {
  const thousand = Math.floor(amount / 1000)
  const hundreds = Math.floor(amount - thousand * 1000)
  const float = amount - thousand * 1000 - hundreds

  const obj = {
    thousand: thousand !== 0 ? String(thousand) + '.' : '',
    hundreds: hundreds !== 0 ? (hundreds / 1000).toFixed(3).slice(2) : '0',
    float: float !== 0 ? '.' + float.toFixed(2).slice(2) : '',
  }

  return obj
}
