<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<wd-drop-menu>
		    <wd-drop-menu-item v-model="value1" :options="option1" @change="handleChange1" />
		    <wd-drop-menu-item v-model="value2" :options="option2" @change="handleChange2" />
		  </wd-drop-menu>
	</view>
</template>

<script setup lang="ts">
	import { useQueue } from '@/uni_modules/wot-design-uni'
	import {ref,reactive} from "vue"
	const { closeOutside } = useQueue()
	const value1 = ref<number>(0)
	const value2 = ref<number>(0)
	
	const option1 = ref<Record<string, any>>([
	  { label: '全部商品', value: 0 },
	  { label: '新款商品', value: 1 },
	  { label: '活动商品', value: 2 }
	])
	const option2 = ref<Record<string, any>>([
	  { label: '综合', value: 0 },
	  { label: '销量', value: 1 },
	  { label: '上架时间', value: 2 }
	])
	
	function handleChange1({ value }) {
	  console.log(value)
	}
	function handleChange2({ value }) {
	  console.log(value)
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
