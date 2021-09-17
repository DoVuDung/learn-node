'use strict'
let a = [100]
let l,r,x
function timkiem_np_dq(a,  l,  r, x){
	if(r < 1) return -1
	if(a[l] == x ) return l
	if(a[r] == x) return r
	return timkiem_np_dq(a,l+1,r-1,x)
}
console.log(timkiem_np_dq([2,3,4,5,6,7,8,9,10], 2, 10, 8))

