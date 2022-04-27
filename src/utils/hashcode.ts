// https://gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0
function hashCode(s: string) {
	let h: number = 0;
	for (let i = 0; i < s.length; i++)
		h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
	return h;
}

export { hashCode };
