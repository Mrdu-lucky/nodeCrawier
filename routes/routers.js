import Router from "koa-router";
import { getDateSuperagent, getPlayList } from './containers/docCrawler'


const myRouter = new Router();
myRouter.get("/anime/playList",(ctx,next)=>{

});

myRouter.get('/', async function (ctx, next) {
    const listUrl = 'http://www.5730.cn'
    await getDateSuperagent({ url: listUrl, type: "toListPage" });
    await getPlayList({ url: listUrl });
    ctx.body = "路由搭建好啦";
});

export default myRouter;