import { fetch, getTime } from './apiConfig'


let hotSearchData = {
  "_":"1551585229995",
  "g_tk":"5381",
  "uin":"0",
  "format":"json",
  "inCharset":"utf-8",
  "outCharset":"utf-8",
  "notice":"0",
  "platform":"h5",
  "needNewCode":"1"
}
export const getHotSearchApi = (data = {}) => {
  Object.assign(data,hotSearchData,data)
  data._= getTime()
  return fetch('/splcloud/fcgi-bin/gethotkey.fcg',data)
}