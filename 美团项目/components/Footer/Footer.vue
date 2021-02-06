<template>
	<view class="footer">
		<view class="top">
			<view class="loginOrRegister">
				<view class="login" @click="toLogin" v-if="!userInfo.nickname">
					登录
				</view>
				<view class="register" v-if="!userInfo.nickname">
					注册
				</view>
				<view class="city">
					<span>城市:</span>
					<span class="iconfont icon-dingwei1" style="font-size:28rpx;color:orange;"></span>
					<span>唐山</span>
				</view>
			</view>
		</view>
		<view class="center">
			<p>首页</p>
			<p>我的</p>
			<p>美团下载</p>
			<p>电脑版</p>
			<p style="border:none;">帮助</p>
		</view>
		<view class="bottom">
			<view class="item" style="margin-right: 20rpx;padding: 0;">友情链接:</view>
			<view class="item" style="padding-left: 0;">猫眼电影</view>
			<view class="item" style="padding-left: 60rpx;">大众点评</view>
			<view class="item" style="padding-left: 60rpx;">美团旅行</view>
			<view class="item" style="padding-left: 60rpx;">榛果民宿</view>
			<view class="item" style="padding-left: 50rpx;">大众点评下载</view>
			<view class="item" style="padding-left: 50rpx;">美团收银官网</view>
			<view class="item" style="padding-left: 50rpx;">美团大学·餐饮学院</view>
			<view class="item" style="padding-left: 250rpx;">快驴进货商家合作</view>
		</view>
		<view class="copyright" style="position: relative;">
			<view style="width:710rpx;height: 4rpx;background: #999;margin: 0 auto;">
			</view>
			<span style="font-size:22rpx;position: absolute;top: -15rpx;left: 50%;margin-left: -162rpx;background: #fff;">©2021 美团网&nbsp;京ICP证070791号</span>
		</view>
	</view>
	
</template>

<script>
	export default {
		props:['userInfo'],
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		mounted(){
		},
		computed:{
		}
	}
</script>

<style lang="stylus">
	.footer
				width 750rpx
				height 440rpx
				padding-top 30rpx
				background #fff
				.top
					width 750rpx
					height 84rpx
					padding 0 40rpx
					.loginOrRegister
						width 670rpx
						height 84rpx
						padding 12rpx
						box-sizing border-box
						.login
							width 110rpx
							height 54rpx
							background #FFBD00
							text-align center
							line-height 54rpx
							border-radius 10rpx
							font-size 28rpx
							float left
						.register
							margin-left 20rpx
							width 110rpx
							height 54rpx
							background #FFBD00
							text-align center
							line-height 54rpx
							border-radius 10rpx
							font-size 28rpx
							float left
							margin-right 200rpx
						.city
							width 190rpx
							height 60rpx
							float left
							font-size 28rpx
							line-height 60rpx
							text-align center
				.center
					width 710rpx
					height 84rpx
					margin-top 10rpx
					margin-left 20rpx
					display flex
					align-items center
					p
						padding 0 37rpx
						font-size 26rpx
						border-right 2rpx solid #B3B3B3
				.bottom
					margin-left 20rpx
					width 690rpx
					height 126rpx
					padding 30rpx 30rpx
					display flex
					flex-wrap wrap
					.item
						font-size 22rpx
						padding-bottom 20rpx
</style>
