const sqlencode = function (str) {
	str=replace(str,"[","[[]");
	str=replace(str,"","[]");
	str=replace(str,"%","[%]");
	return str
}
module.exports = {
	sqlencode
}