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
        Vue.prototype.USER_TABLE_CONFIG = [
            {
                row: 'account',
                width: 150,
                label: '账号'
            },
            {
                row: 'nickname',
                width: 150,
                label: '昵称'
            },
            {
                row: 'number',
                width: 150,
                label: '学号/工号'
            },
            {
                row: 'role',
                width: 150,
                label: '角色'
            }
        ]
		Vue.prototype.PEOPLE_TABLE_CONFIG = [
    		{
    			row: 'name',
    			width: 150,
    			label: '名字'
    		},
            {
                row: 'sexText',
                width: 120,
                label: '性别'
            },
    		{
    			row: 'number',
    			width: 150,
    			label: '学号'
    		},
    		{
    			row: 'academyText',
    			width: 180,
    			label: '学院'
    		},
    		{
    			row: 'phone',
    			width: 150,
    			label: '手机'
    		}
    	];
    	Vue.prototype.ACTIVITY_TABLE_CONFIG = [
    		{
    			row: 'name',
    			width: 150,
    			label: '活动名称'
    		},
    		{
    			row: 'district',
    			width: 120,
    			label: '活动区域'
    		},
    		{
    			row: 'type',
    			width: 120,
    			label: '活动类型'
    		},
    		{
    			row: 'time',
    			width: 120,
    			label: '活动时间'
    		},
    		{
    			row: 'sponsor',
    			width: 120,
    			label: '负责人'
    		},
    		{
    			row: 'phone',
    			width: 120,
    			label: '负责人手机'
    		},
    		{
    			row: 'create_time',
    			width: 120,
    			label: '创建时间'
    		},
    		{
    			row: 'status',
    			width: 120,
    			label: '当前状态'
    		},
    	];
    	Vue.prototype.COMMUNITY_TABLE_CONFIG = [
    		{
    			row: 'name',
    			width: 150,
    			label: '组织名称'
    		},
    		{
    			row: 'district',
    			width: 150,
    			label: '组织区域'
    		},
    		{
    			row: 'type',
    			width: 120,
    			label: '组织类型'
    		},
    		{
    			row: 'enrolment',
    			width: 120,
    			label: '组织人数'
    		},
    		{
    			row: 'sponsor',
    			width: 150,
    			label: '负责人'
    		},
    		{
    			row: 'phone',
    			width: 150,
    			label: '负责人手机'
    		},
    		{
    			row: 'create_time',
    			width: 180,
    			label: '创建时间'
    		},
    	];
	}
}