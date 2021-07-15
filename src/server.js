import koa from "koa";
import myRouter from '../routes/routers'
import Router from "koa-router";
// import createMdodel from "../db/mongoConnect"
// import superagent from "superagent-charset";
import superagent from "superagent";
require('superagent-charset')(superagent)

let arr = [];
const app = new koa();
let playUrlList = [];
let playDataId = "";
const filderRightUrlRes = /https:\/\/pan\.jiningwanjun\.com\/v\/(\w+)/g;
const getIdres = /.*\?(\d+)-.*/;

// var listUrl = 'http://fodm.net/guimiezhiren/';
// var listUrl = "http://fodm.net/jinjidejurenSeason3/";
var listUrl = "http://fodm.net/kexueyifangtongxing/";
var savePath = '保存文件路径'



app
    .use(myRouter.routes())
    .use(myRouter.allowedMethods());

app.listen(3030, () => {
    console.log('[服务已开启,访问地址为：] http://127.0.0.1:3030/');
});

