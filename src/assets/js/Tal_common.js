// 당일: 시,분
// 당월: 일, 시, 분
// 당해: 월, 일, 시, 분
// 그 외: 년, 월, 일, 시, 분

export const changeDateFormat = (date, viewType) => {
  // var compareDate = new Date(Number(date))
  var compareDate = new Date(date)
  var toDate = new Date()

  if (convertDate(compareDate, 'yyyy') === convertDate(toDate, 'yyyy')) {
    if (convertDate(compareDate, 'MM') === convertDate(toDate, 'MM')) {
      if (convertDate(compareDate, 'DD') === convertDate(toDate, 'DD')) {
        return convertDate(compareDate, 'HHmmss')
      }
    } else {
      return convertDate(compareDate, 'MMDDHHmmss')
    }
  } else {
    if (viewType === 'detail') { return convertDate(compareDate, 'yyyyMMDDHHmmss') } else if (viewType === 'list') { return convertDate(compareDate, 'yyyyMMDD') }
  }
//   // alert(new Date(+toDate + 3240 * 10000).toISOString().split('-')[0])
  //   if (compareDate === toDate) {
  //     return changeDateHM(compareDate)
  //   } else {
  //   }
//   // alert(convertDate(toDate, 'yyyy') + ' :yyyy\n' + convertDate(toDate, 'MM') + ' :MM\n' + convertDate(toDate, 'DD') + ' :DD\n' +
//   convertDate(toDate, 'yyyyMMDD') + ' :yyyyMMDD\n' + convertDate(toDate, 'MMDD') + ' :MMDD\n' + convertDate(toDate, 'HHmmss') + ' :HHmmss\n' +
//   convertDate(toDate, 'yyyyMMDDHHmmss') + ' :yyyyMMDDHHmmss\n' + convertDate(toDate, 'MMDDHHmmss') + ' :MMDDHHmmss\n' + convertDate(toDate, 'DDHHmmss') + ' :DDHHmmss')
}

export const extractYear = (date) => {
  return new Date(+new Date() + 3240 * 10000).toISOString().split('T')[1]
}

export const convertDate = (date, format) => {
  if (format === 'yyyy') {
    return new Date(+date + 3240 * 10000).toISOString().split('-')[0]
  } else if (format === 'MM') {
    return new Date(+date + 3240 * 10000).toISOString().split('-')[1]
  } else if (format === 'DD') {
    return new Date(+date + 3240 * 10000).toISOString().split('-')[2].split('T')[0]
  } else if (format === 'yyyyMMDD') {
    return new Date(+date + 3240 * 10000).toISOString().split('T')[0]
  } else if (format === 'MMDD') {
    return new Date(+date + 3240 * 10000).toISOString().split('-')[1] + '-' +
        new Date(+date + 3240 * 10000).toISOString().split('-')[2].split('T')[0]
  } else if (format === 'HHmmss') {
    return date.toTimeString().split(' ')[0]
  } else if (format === 'yyyyMMDDHHmmss') {
    return new Date(+date + 3240 * 10000).toISOString().replace('T', ' ').replace(/\..*/, '')
  } else if (format === 'MMDDHHmmss') {
    return new Date(+date + 3240 * 10000).toISOString().split('-')[1] + '-' +
    new Date(+date + 3240 * 10000).toISOString().split('-')[2].replace('T', ' ').replace(/\..*/, '')
  } else if (format === 'DDHHmmss') {
    return new Date(+date + 3240 * 10000).toISOString().split('-')[2].replace('T', ' ').replace(/\..*/, '')
  }
}

export const numberToKorean = (number) => {
  const koreanNumber = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const tenThousandUnit = ['', '만', '억', '조']
  const tenUnit = ['', '0', '00', '000']
  let answer = ''
  const unit = 10000
  let index = 0
  let division = Math.pow(unit, index)

  while (Math.floor(number / division) > 0) {
    const mod = Math.floor(number % (division * unit) / division)
    if (mod) {
      const modToArray = mod.toString().split('')
      const modLength = modToArray.length - 1
      const toKorean = modToArray.reduce((a, v, i) => {
        a += `${koreanNumber[v * 1]}${tenUnit[modLength - i]}`
        return a
      }, '')
      // answer = `${toKorean}${tenThousandUnit[index]} ` + answer
      answer = `${toKorean}${tenThousandUnit[index]} `
    }
    division = Math.pow(unit, ++index)
  }
  return answer
}

export function getUserInform () {
  var resultMap = '등록된 이름이 없습니다.'
  // alert(localStorage.getItem('user'))
  if (localStorage.getItem('sessionUser') !== 'undefined' && localStorage.getItem('sessionUser') !== undefined && localStorage.getItem('sessionUser') !== null && localStorage.getItem('sessionUser') !== '') {
    var userInfo = (JSON.parse(localStorage.getItem('sessionUser')))

    resultMap = userInfo
    return resultMap
  } else {
    this.$router.replace('policies')
  }
  // alert(JSON.stringify(resultMap))
}

// 방어루틴
export function makeMtextMap (str, leng) {
  // string if
  var returnMap = new Map()
  if (str) {
    var splitMtext = str.split('$#$')
    // split if ~> $$가 없다면?
    for (var i = 0; i < splitMtext.length; i++) {
      var splitMtextDetail = splitMtext[i].split('$^$')
      // split if ~> $$가 없다면?
      returnMap.set(splitMtextDetail[0], splitMtextDetail[1])
    }
  } else {
  }
  // alert(returnMap.get(leng))
  // alert(leng)
  return returnMap.get(leng)
}
