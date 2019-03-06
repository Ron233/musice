import { fetch,getTime } from './apiConfig'

let CommendData = {
  "_":"1551535696969",
  "g_tk":"5381",
  "uin":"0",
  "format":"json",
  "inCharset":"utf-8",
  "outCharset":"utf-8",
  "notice":"0",
  "platform":"h5",
  "needNewCode":"1"
}
export const getCommendApi = (data = {}) => {
  Object.assign(data,CommendData,data)
  data._ = getTime();
  return fetch('/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', data)
}