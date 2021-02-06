<template>
	<view class="classficationsContainer">
		<view class="header">
			全部分类
		</view>
		<view class="content" v-for="(fenlei,index) in classData" :key="item.id">
			<view class="title">
				{{fenlei.title}}
			</view>
			<view class="table">
				<view class="item" v-for="(item,index) in fenlei.item" :key="item.id">
					{{item.content}}
				</view>
				<view class="item kongbai" style="right: 33.33%;">
					
				</view>
				<view class="item kongbai">
					
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
		methods:{
			getClassData(){
				this.$store.dispatch('getIndexData')
			},
		},
		mounted(){
			this.getClassData()
		},
		computed:{
			classData(){
				return this.$store.state.fenlei.classData
			},
			userInfo(){
				return this.$store.state.login.userInfo
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus">
	.classficationsContainer
		width 100%
		padding 0 20rpx
		background #f0efed
		overflow:hidden		
		.header
			width 710rpx
			height 70rpx
			background #fff
			margin-top 20rpx
			margin-bottom 40rpx
			border-radius 6rpx
			border 1px solid #DDD8CE
			text-align center
			line-height 70rpx
			font-size 28rpx
		.content
			width 710rpx
			.title
				width 100%
				height 33rpx
				font-size 30rpx
				margin 14rpx 0
			.table
				width 710rpx
				display flex
				flex-wrap wrap
				margin-bottom 40rpx
				position relative
				.item
					width 33.33%
					height 81rpx
					background #FFFFFF
					text-align center
					line-height 81rpx
					border-bottom 2rpx solid #ddd8ce
					border-right 2rpx solid #ddd8ce
					margin-bottom 2rpx
					font-size 28rpx
					display inline-block
					box-sizing border-box
					z-index 1
					&.isShow
						display none
					&.kongbai
						position absolute
						bottom 0
						right 0
						z-index 0
</style>
