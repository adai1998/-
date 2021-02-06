module.exports={
	devServer:{
	proxy: {
	            "/api": {
	                target: "http://localhost:3001",
	                pathRewrite: {"^/api" : ""},  //要看真正的后台接口路径当中有没有包含/api，有就不用去掉，没有就得去掉
	                changeOrigin:true
		    }
		}
	}
}