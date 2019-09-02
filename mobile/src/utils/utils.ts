export const commentDate = (stringTime:string) => {
  let date: any
  if (isNaN(Date.parse(stringTime))) {
    date = new Date(Date.parse(stringTime.replace(/-/g, '/').replace(/T/, ' ')))
  } else {
    date = new Date(Date.parse(stringTime))
  }
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

export const year = (stringTime:string) => {
  let date: any
  if (isNaN(Date.parse(stringTime))) {
    date = new Date(Date.parse(stringTime.replace(/-/g, '/').replace(/T/, ' ')))
  } else {
    date = new Date(Date.parse(stringTime))
  }
  let fmt = 'yyyy'
  if (/(y+)/.test(fmt)) { // 年
    let year = date.getFullYear().toString()
    fmt = fmt.replace(RegExp.$1, year)
  }
  return fmt
}

export const articleDate = (stringTime:string) => {
  let date: any
  if (isNaN(Date.parse(stringTime))) {
    date = new Date(Date.parse(stringTime.replace(/-/g, '/').replace(/T/, ' ')))
  } else {
    date = new Date(Date.parse(stringTime))
  }
  let fmt = 'MM-dd'
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
  return fmt
}
