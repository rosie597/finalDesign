function urlParam() {
	var name,value;
	var url=location.href;
	var num=url.indexOf('?')
	var result={}
	url=url.substr(num+1)
	var arr=url.split('&')
	for (let i=0;i<arr.length;i++){
		num=url.indexOf('=')
		if(num!=-1){
			name=arr[i].substr(0,num)
			value=arr[i].substr(num+1)
			result[name]=value
		}
	}
	return result
}