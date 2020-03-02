var trimStart = ''.trimStart || function () {
	return this.replace(/^[\s\uFEFF\xA0]+/, '');
};
export default trimStart;
