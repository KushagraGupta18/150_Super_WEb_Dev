

//this is JSON String
let jsonData=`{"id":139,"url":"https://www.tvmaze.com/shows/139/girls","name":"Girls","type":"Scripted","language":"English","genres":["Drama","Romance"],"status":"Ended","runtime":30,"averageRuntime":30,"premiered":"2012-04-15","ended":"2017-04-16","officialSite":"http://www.hbo.com/girls","schedule":{"time":"22:00","days":["Sunday"]},"rating":{"average":6.5},"weight":97,"network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"},"officialSite":"https://www.hbo.com/"},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":30124,"thetvdb":220411,"imdb":"tt1723816"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"},"summary":"<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>","updated":1704794122,"_links":{"self":{"href":"https://api.tvmaze.com/shows/139"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/1079686","name":"Latching"}}}`;

//this is a string and i cannot use .(dot notation) here.
//i cannot work on string here kyuki object nhi hai


//I have a JSON String and i cant work directly on JSON String. i hava a method to convert JSON string into usable Js object/Array.
//i have two method---> 1. JSON.parse() and 2. JSON.stringify()


let obj=JSON.parse(jsonData);//convert JSON string into usable JS Object / Array.
console.log(obj.name);


let str=JSON.stringify(obj.name);//convert JSON object/array into String
console.log(str);

