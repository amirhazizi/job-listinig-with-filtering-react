const calculateTime = (createAtTime: number) => {
  const nowDate = new Date().getTime() - createAtTime
  const oneYear = 6622560000000
  const oneMonth = 18144000000
  const oneWeek = 604800000
  const oneDay = 86400000
  const oneHour = 3600000
  const oneMinue = 60000
  let time = Math.floor(nowDate / oneYear)
  if (time > 0) {
    return `${time}yr ago`
  }
  time = Math.floor(nowDate / oneMonth)
  if (time > 0) {
    return `${time}mo ago`
  }
  time = Math.floor(nowDate / oneWeek)
  if (time > 0) {
    return `${time}w ago`
  }
  time = Math.floor(nowDate / oneDay)
  if (time > 0) {
    return `${time}d ago`
  }
  time = Math.floor(nowDate / oneHour)
  if (time > 0) {
    return `${time}h ago`
  }
  time = Math.floor(nowDate / oneMinue)
  if (time > 0) {
    return `${time}min ago`
  }
  time = Math.floor(nowDate / 1000)
  if (time > 0) {
    return `${time}sec ago`
  }
  return "just now"
}
export default calculateTime
