<template>
	<view class="loginContainer">
		<view class="header">
			<view class="image">
				<image src="https://p0.meituan.net/travelcube/7c71ecc4b44d0e17447076cd23e501cb31967.png" mode=""></image>
			</view>
		</view>
		<view class="content">
			<view class="login">
				<view class="phone">
					<p>中国 +86<i></i></p>
					<input type="text" value="" v-model="phone" placeholder="请输入手机号"/>
				</view>
				<view class="code">
					<input type="text" value="" v-model="password" placeholder="请输入密码"/>
					<p>忘记密码</p>
				</view>
				<view class="anniu">
					<button @click="login">登录</button>
				</view>
			</view>
			<view class="weizhuce" style="display: none;">
				未注册的手机号验证后自动创建美团账户
			</view>
			<view class="zhanghao">
				账号登录
			</view>
		</view>
		<view class="footer">
			登录即代表您已经同意<span>《美团用户服务协议》</span><span>《隐私政策》</span>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				phone:'13933311138',
				password:'lijianhui',
				
			}
		},
		methods: {
			
			//登录
			async login(){
				let {phone,password} = this
				//判断是否输入手机号和密码
				if(!phone || !password) {
					uni.showToast({
					    title: '手机号和密码不能为空',
					    duration: 2000,
							icon:'none'
					});
					return
				}
				//判断手机号格式是否正确
				let phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
				if(!phoneReg.test(phone)){
					uni.showToast({
					    title: '手机号输入不合法',
					    duration: 2000,
							icon:'none'
					});
					return
				}
				// let result = await request('/login/cellphone', {phone, password, isLogin: true});
				try{
					await this.$store.dispatch('getUserInfo',{phone,password,isLogin:true})
					uni.showToast({
					    title: '登录成功',
					    duration: 2000,
							icon:'success',
					})
					uni.redirectTo({
						url:"/pages/personal/personal"
					})
				}catch(e){
					uni.showToast({
					    title: `${e}`,
					    duration: 2000,
							icon:'none',
					})
				}
			}
		}
	}
</script>

<style lang=stylus>
	.loginContainer
		width 100%
		height 1184rpx
		.header
			width 100%
			height 200rpx
			padding-top 50rpx
			.image
				width 160rpx
				height 160rpx
				margin 0 auto
				border-radius 50%
				image
					width 100%
					height 100%
		.content
			width 100%
			.login
				width 750rpx
				height 370rpx
				.phone
					width 620rpx
					height 50rpx
					background #fff
					margin 0 auto
					border-bottom 4rpx solid #999
					padding-bottom 20rpx
					line-height 50rpx
					p
						position relative
						float left
						width 138rpx
						height 49rpx
						font-size 24rpx
						i
							position absolute
							top 20rpx
							right 20rpx
							width 10rpx
							height 10rpx
							border-left 2rpx solid #ccc
							border-bottom 2rpx solid #ccc
							transform rotate(230deg)
					input
						float left
				.code
					width 620rpx
					height 50rpx
					background #fff
					margin 0 auto
					border-bottom 4rpx solid #999
					padding-bottom 20rpx
					line-height 50rpx
					margin-top 60rpx
					line-height 50rpx
					p
						height 40rpx
						line-height 40rpx
						padding-left 10rpx
						font-size 26rpx
						color #ccc
						float right
						margin-top 15rpx
						border-left 4rpx solid #ccc
					input
						float left
						margin-top 10rpx
				.anniu
					width 620rpx
					height 90rpx
					margin 0 auto
					margin-top 60rpx
					button
						background #FFBD00
						color #222
						opacity 0.3
						font-size 30rpx
			.weizhuce
				margin-top 10rpx
				font-size 24rpx
				text-align center
				color #999
			.zhanghao
				margin-top 50rpx
				text-align center
				font-size 24rpx
		.footer
			margin-top 360rpx
			text-align center
			width 100%
			font-size 24rpx
			span
				color #FE8C00
</style>