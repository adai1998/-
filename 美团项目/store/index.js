import vue from 'vue'
import vuex from 'vuex'
import login from './modules/login.js'
import index from './modules/index.js'
import fenlei from './modules/fenlei.js'
import request from '../utils/request.js'
vue.use(vuex)

const store = new vuex.Store({
	modules:{
		login,index,fenlei
	}
})
export default store