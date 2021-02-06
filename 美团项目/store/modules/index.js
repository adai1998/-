import request from '../../utils/request.js'
let state = {
	indexData:[]
}
let mutations = {
	setIndexData(state,indexData){
		state.indexData = indexData
	}
}
let actions = {
	async getIndexData({commit}){
		let result = await request({index:'host',url:'/getIndexData'})
		commit('setIndexData',result.List)
	}
}

let getters = {}

export default {
	state,mutations,actions,getters
}