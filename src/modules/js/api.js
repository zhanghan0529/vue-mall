let url ={
    hotLists : '/index/hotLists',
    banner: '/index/banner',
    topList:'/category/topList',
    suList:' /category/topList',
    rank:' /category/rank'
}
let host = 'http://rapapi.org/mockjsdata/24170'
for(let key in url){
    url[key]= host + url[key]
}
export default url