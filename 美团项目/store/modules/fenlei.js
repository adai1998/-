import request from '../../utils/request.js'
let state = {
	classData:[]
}
let mutations = {
	setClassData(state,classData){
		state.classData = classData
	}
}
let actions = {
	async getIndexData({commit}){
		let result = await request({index:'host',url:'/getclassData'})
		console.log(result)
		commit('setClassData',result)
	}
}

let getters = {}

export default {
	state,mutations,actions,getters
}