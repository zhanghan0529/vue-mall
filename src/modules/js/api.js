let url ={
    hotLists : '/index/hotLists',
    banner: '/index/banner',
    topList:'/category/topList',
    subList:'/category/subList',
    rank:'/category/rank',
    list:'/search/list',
    details:'/goods/details',
    deal:'/goods/deal',
    add: '/cart/add'
}
let host = 'http://rapapi.org/mockjsdata/24170'
for(let key in url){
    url[key]= host + url[key]
}
export default url