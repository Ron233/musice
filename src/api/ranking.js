import { fetch,getTime } from './apiConfig'

let rankingData = {
  "_":"1551538081788",
  "g_tk":"5381",
  "uin":"0",
  "format":"json",
  "inCharset":"utf-8",
  "outCharset":"utf-8",
  "notice":"0",
  "platform":"h5",
  "needNewCode":"1"
}
export const getRankingApi = (data = {}) => {
  Object.assign(data,rankingData,data)
  data._ = getTime();
  return fetch('/v8/fcg-bin/fcg_myqq_toplist.fcg', data)
}