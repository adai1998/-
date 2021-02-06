const KoaRouter = require('koa-router');
const router = new KoaRouter();

// 注册index主页的接口
const indexData = require('../datas/index.json');
// console.log(indexData, typeof indexData) // Object
router.get('/getIndexData', (ctx) => {
	ctx.body = indexData;
});
//注册分类列表
const classData = require('../datas/class.json');
router.get('/getclassData', (ctx) => {
	ctx.body = classData;
});



// 向外暴露路由器对象
module.exports = router;
