export const commentDate = (stringTime:string) => {
  let date = new Date(stringTime)
  let fmt = 'MM-dd HH:ii'
  if (/(M+)/.test(fmt)) { // 月
    let mouth: any = date.getMonth() + 1
    if (mouth < 10) {
      mouth = '0' + mouth
    }
    fmt = fmt.replace(RegExp.$1, mouth)
  }
  if (/(d+)/.test(fmt)) { // 日
    let mydate: any = date.getDate()
    if (mydate < 10) {
      mydate = '0' + mydate
    }
    fmt = fmt.replace(RegExp.$1, mydate)
  }
  if (/(H+)/.test(fmt)) { // 时
    let hours: any = date.getHours()
    if (hours < 10) {
      hours = '0' + hours
    }
    fmt = fmt.replace(RegExp.$1, hours)
  }
  if (/(i+)/.test(fmt)) { // 分
    let minutes: any = date.getMinutes()
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    fmt = fmt.replace(RegExp.$1, minutes)
  }
  return fmt
}
