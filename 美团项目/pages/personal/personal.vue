<template>
	<view class="personalContainer">
			<view class="header">
				<image class="avater" :src="userInfo.avatarUrl" mode=""></image>
				<image class="backgroundImg" src="//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/my-photo.png" mode=""></image>
				<view class="userInfo">
					<view class="uname">
						{{userInfo.nickname}}
						<span class="v1"></span>
					</view>
					<view class="price">
						账户余额： 	<span style="color:red;">{{userInfo.city}}</span>元
					</view>
				</view>
				<view class="jiantou">
					
				</view>
			</view>
			<view class="order">
				<view class="top">
					<view class="allOrder">
						<i class="iconfont icon-dingdan"></i>
						全部订单
					</view>
					<view class="jiantou">
						
					</view>
				</view>
				<view class="orderindex">
					<view class="orderItem">
						<i class="iconfont icon-qianbao"></i>
						<span>待付款</span>
						<span class="num" :class="{isShow:userInfo.playlistCount}">{{userInfo.playlistCount}}</span>
					</view>
					<view class="orderItem">
						<i class="iconfont icon-youhuiquan"></i>
						<span>待使用</span>
						<span class="num" :class="{isShow:userInfo.follows}">{{userInfo.follows}}</span>
					</view>
					<view class="orderItem">
						<i class="iconfont icon-daipingjia"></i>
						<span>待评价</span>
						<span class="num" :class="{isShow:userInfo.follows}">{{userInfo.follows}}</span>
					</view>
					<view class="orderItem">
						<i class="iconfont icon-shouhouguanli"></i>
						<span>退款/售后</span>
						<span class="num"></span>
					</view>
					
				</view>
			</view>
			<view class="myCollect">
				<view class="collectItem">
					<view class="v1">
						<i class="iconfont icon-shoucang"></i>
						我的收藏
						<em class="num">99+</em>
						<span></span>
					</view>
				</view>
				<view class="collectItem">
					<view class="v1">
						<i class="iconfont icon-youhuiquan1"></i>
						我的抵用券
						<em class="num">99+</em>
						<span></span>
					</view>
				</view>
				<view class="collectItem">
					<view class="v1">
						<i class="iconfont icon-icon-test1"></i>
						我的抽奖单
						<em class="num">99+</em>
						<span></span>
					</view>
				</view>
				<view class="collectItem">
					<view class="v1">
						<i class="iconfont icon-jifen"></i>
						我的积分
						<em class="num">99+</em>
						<span></span>
					</view>
				</view>
			</view>
			<Footer :userInfo="userInfo"></Footer>
	</view>
</template>

<script>
	import Footer from '../../components/Footer/Footer.vue'
	export default {
		components:{
			Footer
		},
		data() {
			return {
				
			};
		},
		onLoad(){
			
		},
		computed:{
			userInfo(){
				return this.$store.state.login.userInfo
			}
		}
	}
</script>

<style lang="stylus">
	.personalContainer
		width 100%
		height 100%
		background #F0EFED
		.header
			height 161rpx
			width 750rpx
			background -webkit-linear-gradient(top,#e1dace,#dfc8b4);
			white-space:nowrap;
			position relative
			border-bottom 2rpx solid #ddd8ce
			.backgroundImg
				position absolute
				top 0
				right 0
				width 648rpx
				height 160rpx
			.avater
				width 120rpx
				height 120rpx
				position absolute
				top 20rpx
				left 40rpx
				z-index 0
			.userInfo
				position relative
				width 730rpx
				height 160rpx
				z-index 10
				padding 40rpx 20rpx
				margin-right 20rpx
				box-sizing border-box
				font-size 24rpx
				padding-left 200rpx
				color #666
				.uname
					color #333
					span
						display inline-block
						background-image url(http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/css/i/vip3.png)
						width 30rpx
						height 30rpx
						background-size 30rpx
						margin-left 30rpx
						background-position 31rpx 369rpx
				.price
					margin-top 20rpx
			.jiantou
				position absolute
				top 50%
				margin-top -15rpx
				right 0%
				margin-right 50rpx
				width 30rpx
				height 30rpx
				border-left 4rpx solid #666
				border-bottom 4rpx solid #666
				transform rotate(230deg)
		.order
			width 100%
			height 264rpx
			margin-top 10rpx
			border-bottom 2rpx solid #DDD8CE
			background #fff
			.top
				height 94rpx
				width 100%
				position relative
				border-bottom 4rpx solid #DDD8CE
				.allOrder
					width 710rpx
					height 38rpx
					padding 28rpx 20rpx
					white-space nowrap
					font-size 35rpx
					line-height 50rpx
					i
						width 50rpx
						height 50rpx
						background #FE8C00
						font-size 50rpx
						display inline-block
						margin-right 40rpx
				.jiantou
					position absolute
					top 50%
					margin-top -15rpx
					right 0%
					margin-right 50rpx
					width 30rpx
					height 30rpx
					border-left 4rpx solid #666
					border-bottom 4rpx solid #666
					transform rotate(230deg)
			.orderindex
				width 750rpx
				height 167rpx
				display flex
				.orderItem
					width 25%
					height 162rpx
					padding 28rpx 0
					text-align center
					box-sizing border-box
					position relative
					i
						font-size 60rpx
					.num
						width 40rpx
						height 40rpx
						border-radius 50%
						background #EC5330
						padding 8rpx 6rpx
						font-size 20rpx
						display inline-block
						position absolute
						top 10rpx
						right 38rpx
						color #fff
						display none
						box-sizing border-box
						text-align ceter
						&.isShow
							display block
		.myCollect
			height 381rpx
			width 100%
			background pink
			margin-top 20rpx
			background-color #fff
			border-bottom 2rpx solid #DDD8CE
			box-sizing border-box
			.collectItem
				border-bottom 2rpx solid #DDD8CE;
				padding 21rpx 20rpx
				white-space:nowrap;
				position relative
				box-sizing border-box
				.v1
					font-size 30rpx
					i
						width 50rpx
						height 50rpx
						font-size 50rpx
						display inline-block
						background-color #0092DE
						color #fff
						margin-right 25rpx
					.num
						position absolute
						top 30%
						right 40rpx
						color #999
					span
						position: absolute;
						width 25rpx
						height 25rpx
						border-bottom 3rpx solid #999
						border-right 3rpx solid #999
						right: 20rpx;
						top: 40%;
						display: block;
						transform rotate(-45deg)
</style>
