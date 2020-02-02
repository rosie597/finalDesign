export default {
	install (Vue, options) {
		Vue.prototype.CREATE_STATUS = {
			base_info: 0,
			sponsor_info: 1,
			displayment: 2,
			success: 3
		}
	}
}