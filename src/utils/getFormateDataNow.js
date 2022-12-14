/**
 * 获取当前时间的格式化字符串
 * @param { string } dateTimeConnector 日期与时间的连接符
 * @param { string } dateSeparator 日期连接符
 * @param { string } timeSeparator 时间连接符
 * @returns { string } 结果字符串
 */
export function getFormatDateNow(dateTimeConnector, dateSeparator, timeSeparator) {
  const date = [];
  const time = [];
  const dateTime = new Date();
  const year = dateTime.getFullYear(); // 获取当前年份
  date.push(year);
  const month = dateTime.getMonth() + 1; // 获取当前月份
  date.push(month < 10 ? `0${month}` : `${month}`);
  const day = dateTime.getDate(); // 获取当前日
  date.push(day < 10 ? `0${day}` : `${day}`);
  const hour = dateTime.getHours(); // 获取小时
  time.push(hour < 10 ? `0${hour}` : `${hour}`);
  const minutes = dateTime.getMinutes(); // 获取分
  time.push(minutes < 10 ? `0${minutes}` : `${minutes}`);
  const second = dateTime.getSeconds(); // 获取秒
  time.push(second < 10 ? `0${second}` : `${second}`);
  return [date.join(dateSeparator), time.join(timeSeparator)].join(dateTimeConnector);
}
