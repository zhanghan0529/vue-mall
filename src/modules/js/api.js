let url ={
    hotLists : '/index/hotLists'
}
let host = 'http://rapapi.org/mockjsdata/24170'
for(let key in url){
    url[key]= host + url[key]
}
export default url