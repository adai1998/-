import request from '../../utils/request.js'

let state = {
	userInfo : wx.getStorageSync('user') || {}
}
let mutations = {
	setUserInof(state,userInfo){
		state.userInfo = userInfo
	}
}
let actions = {
	async getUserInfo({commit},{phone,password,isLogin}){
		let result = await request({index:'login',url:'/login/cellphone'}, {phone, password, isLogin});
		if(result.code === 200){
			wx.setStorageSync('user',result.profile)
			commit('setUserInof',result.profile)
			return 'ok'
		}else if(result.code === 400){
			return Promise.reject(new Error('手机号'))
		}else if(result.code === 502){
			return Promise.reject(new Error('密码错误'))
		}else if(result.code === 501){
			return Promise.reject(new Error('账号不存在'))
		}
	}
}

let getters = {}

export default {
	state,mutations,actions,getters
}