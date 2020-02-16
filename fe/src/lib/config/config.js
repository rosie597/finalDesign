export default {
	install (Vue, options) {
		Vue.prototype.CREATE_STATUS = {
			base_info: 0,
			sponsor_info: 1,
			displayment: 2,
			success: 3
		};
		Vue.prototype.ACTIVITY_STATUS = {
			0: '未审核',
			1: '审核不通过',
			0: '未开始',
			1: '进行中',
			2: '已结束'
		}
	}
}