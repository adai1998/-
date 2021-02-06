import config from './config.js';
export default (xinxi, data={}, method='GET') => {
	return new Promise((resolve, reject) => {
		let {index,url} = xinxi
		// 执行异步任务
		uni.request({
			url: config[index] + url, // 小程序
			// url, // H5
			data,
			method,
			header: {
			        cookie: uni.getStorageSync('token')?wx.getStorageSync('token').toString():''
			      },
			success: (res) => {
				if(data.isLogin){
					wx.setStorageSync('token', res.token)
				}
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
			}
		})
	});
}