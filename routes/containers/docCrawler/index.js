const getDateSuperagent = ({ url, type }) => {
    //superagent不理解，请在文章开头的地方寻找了解superagent，点击进去理解
    superagent.get(url)
        .charset('gbk') //当前页面编码格式
        .buffer(true)
        .end((err, sres) => { //页面获取到的数据
            let html = sres.text,
                $ = cheerio.load(html, {
                    decodeEntities: false
                }); //用cheerio解析页面数据
            const DomList = $(".bfdz").eq(0).find("a");
            // const emptyIdStr = $("#head").next("div").attr('id');
            // playDataId = emptyIdStr.match(/empty(\d*)/)[1];
            // console.log(emptyIdStr, "emptyIdStr")
            if (DomList.length > arr.length) {
                arr = [];

                // 下面类似于jquery的操作，前端的小伙伴们肯定很熟悉啦
                DomList.each((index, element) => {
                    const dataObj = {};
                    var $text = $(element).text();
                    var $url = $(element).attr("href");
                    // getDateSuperagent({url:$url,type:"toPlayPage"});
                    dataObj.text = $text;
                    dataObj.url = $url;
                    arr.push(dataObj);
                });
            } else {
                // const playUrl= $("#cciframe").attr("src").match(/a=(https:\/\/.*)&b=.*/)[1];
                // const playUrl= $("#cciframe").attr("src");
                // playUrlList.push(playUrl);
            }

            //    arr= $(".bfdz ul").text();
        });
}



const getPlayList = ({ url }) => {
    console.log(arr, "arr")
    const playName = url.match(/fodm\.net\/(\w+)/)[1];
    if (arr.length > 0 && getIdres.test(arr[0].url)) {
        const playDetailurl = `http://fodm.net/${arr[0].url}`;
        //   const playUrlListJsId = arr[0].url.match(getIdres)[1];
        let theGETplayUrlListJs = ``;
        superagent.get(playDetailurl).charset('gbk').buffer(true).end((err, sres) => {
            let html = sres.text,
                $ = cheerio.load(html, {
                    decodeEntities: false
                });
            const jsPathUrl = $("#ccplay").find("script").first().attr("src");
            theGETplayUrlListJs = `http://fodm.net/${jsPathUrl}`;
            superagent.get(theGETplayUrlListJs).charset('utf-8').buffer(true).end((err, sres) => {
                const jsStr = sres.text;
                playUrlList = jsStr.match(filderRightUrlRes);
                if(!playUrlList){return};
                playUrlList.map((item, index) => {
                    arr[index].url = item;
                });
                const playModelData = { 
                    name: playName, 
                    list: arr,
                    type:1 
                }
                // createMdodel(playModelData);

            })
        })
    }
}