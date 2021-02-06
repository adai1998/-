<template>
	<view class="indexContent">
		<view class="header">
			<view class="nav-wrap-left">
				唐山
				<image class="xiaobiaoImg" src="https://p0.meituan.net/travelcube/45c79a92755b54adc9dc1c4682b123b3201.png" mode=""></image>
			</view>
			<view class="box-search">
				<image src="https://p0.meituan.net/travelcube/99c29829cf1b85d5cdbc76a1bd0b7329814.png" mode=""></image>
				<p>请输入商家名、品类或者商圈...</p>
			</view>
			<view class="nav-wrap-right" @click="toLogin">
				<image src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png" alt="">
			</view>
		</view>
		<view class="navList">
			<view class="navItem">
				<span class="iconfont icon-fenzu"></span>
				<p>美食</p>
			</view>
			<view class="navItem">
				<span class="iconfont icon-dianying" style=" background: #FF6767;"></span>
				<p>猫眼电影</p>
			</view>
			<view class="navItem">
				<span class="iconfont icon-ziyuan" style=" background: #8A90FA;"></span>
				<p>酒店</p>
			</view>
			<view class="navItem">
				<span class="iconfont icon-yinliao" style=" background: #FED030;"></span>
				<p>休闲娱乐</p>
			</view>
			<view class="navItem" >
				<span class="iconfont icon-icon-test" style=" background: #FD9D21;"></span>
				<p>外卖</p>
			</view>
			<view class="navItem">
				<span class="iconfont icon-KTV" style=" background: ##FED030;"></span>
				<p>KTV</p>
			</view>
			<view class="navItem">
				<span class="iconfont icon-zhoubianyou" style=" background: #4DC6EE;"></span>
				<p>周边游</p>
			</view>
			<view class="navItem">
				<span class="iconfont icon-nvren" style=" background: #FF80C2;"></span>
				<p>丽人</p>
			</view>
			<view class="navItem">
				<span class="iconfont icon-shutiao" style=" background: #FD9D21;"></span>
				<p>小吃快餐</p>
			</view>
			<view class="navItem" @click="toAllClass">
				<span class="iconfont icon-xiazai9" style=" background: #00D3BE;"></span>
				<p>全部分类</p>
			</view>
		</view>
		<view class="like">
			<view class="title">
				猜你喜欢
			</view>
			<view class="likeItem" v-for="(item,index) in indexData" :key="item.id">
				<view class="image">
					<image :src="item.imgUrl" mode=""></image>
				</view>
				<view class="text">
					<p style="font-size:34rpx;">{{item.title}}</p>
					<p style="font-size:26rpx;white-space:nowrap;">{{item.address}}</p>
					<p class="price" style="height: 40rpx;margin-top: 50rpx;" >
						<span style="font-size:38rpx;color: red;float: left;">{{item.price}}</span>
						<span style="font-size:30rpx;color: red; float: left;margin-top: 10rpx;">元</span>
						<span style="font-size:30rpx;float: left;margin-top: 10rpx; margin-left: 10rpx;">门市价：{{item.mPrice}}元</span>
						<span style="font-size:24rpx; float: right;margin-top: 0rpx;white-space:nowrap;">已售{{item.yishou}}</span>
					</p>
				</view>
			</view>
			
			<view class="bottom">
				<p>查看全部团购</p>
				<view class="jiantou">
					
				</view>
			</view>
			
		</view>
		<Footer :userInfo="userInfo"></Footer>
		
	</view>
</template>

<script>
	import Footer from '../../components/Footer/Footer.vue'
	export default {
		components:{Footer},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			wx.getLocation({
			 type: 'wgs84',
			 success (res) {
			   const latitude = res.latitude
			   const longitude = res.longitude
			   const speed = res.speed
			   const accuracy = res.accuracy
			 }
			})
		},
		mounted(){
			this.getIndexData()
		},
		methods: {
			//去首页
			toLogin(){
				if(this.userInfo.nickname){
					wx.navigateTo({
						url:"/pages/personal/personal"
					})
				}else{
					wx.navigateTo({
						url:"/pages/login/login"
					})
				}

			},
			//获取首页数据
			getIndexData(){
				this.$store.dispatch('getIndexData')
			},
			//点击全部分类
			toAllClass(){
				wx.navigateTo({
					url:'/pages/classification/classification'
				})
			}
		},
		computed:{
			indexData(){
				return this.$store.state.index.indexData
			},
			userInfo(){
				return this.$store.state.login.userInfo
			}
		}
	}
</script>

<style lang=stylus>
	.indexContent
		width 100%
		background #F0EFED
		.header
			width 750rpx
			height 100rpx
			display flex
			background #FFC100
			.nav-wrap-left
				position relative
				text-align center
				line-height 100rpx
				font-size 28rpx
				width 150rpx
				height 100%
				.xiaobiaoImg
					position absolute
					bottom 44rpx
					right 24rpx
					margin-top -50rpx
					width 15rpx
					height 9rpx
			.box-search
				display flex
				align-items center
				width 501rpx
				height 64rpx
				background #fff
				margin-top 20rpx
				border-radius 10rpx
				p
					font-size 28rpx
					color #ccc
				image
					margin-left 20rpx
					width 40rpx
					height 34rpx
			.nav-wrap-right
				width 98rpx
				height 100%
				image
					width 48rpx
					height 48rpx
					margin 25rpx
		.navList
			border-bottom 2rpx solid #DDD8CE
			width 750rpx
			height 336rpx
			background #fff
			display flex
			flex-wrap wrap
			.navItem
				box-sizing border-box
				padding 20rpx 17rpx
				text-align center
				width 150rpx
				height 162rpx
				span
					text-align center
					line-height 80rpx
					display block
					margin 0 auto
					font-size 50rpx
					width 80rpx
					height 80rpx
					border-radius 50%
					background #FD9D21
					color #fff
				p
					font-size 28rpx
					margin-top 5rpx
		.like
			border-top 2rpx solid #DDD8CE
			margin-top 20rpx
			width 750rpx
			background #fff
			padding-left 20rpx
			border-bottom 4rpx solid #DDD8CE
			.title
				width 100%
				height 84rpx
				line-height 84rpx
				border-bottom 1rpx solid #DDD8CE
				font-size 40rpx
			.likeItem
				padding 20rpx 0
				height 204rpx
				width 100%
				border-bottom 1rpx solid #DDD8CE
				padding 12rpx
				box-sizing border-box
				.image
					float left
					width 180rpx
					height 180rpx
					image
						width 100%
						height 100%
				.text
					float left
					width 500rpx
					height 180rpx
					overflow hidden
					margin-left 22rpx
			.bottom
				position relative
				width 730rpx
				height 80rpx
				line-height 80rpx
				.jiantou
					position absolute
					top 50%
					margin-top -12rpx
					right 20rpx
					width 25rpx
					height 25rpx
					border-bottom 5rpx solid #FE8C00
					border-left 5rpx solid #FE8C00
					transform rotate(230deg)
</style>
