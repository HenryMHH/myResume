export function readStatusManager(type, index) {
	let key = `${type}-${index}`
	let list = localStorage.getItem('readList')
	if (list) {
		let parsedList = JSON.parse(list)
		if (parsedList[key]) {
		} else {
			parsedList[key] = 'true'
			localStorage.setItem('readList', JSON.stringify(parsedList))
		}
	}
	if (!list) {
		let obj = {}
		obj[key] = 'true'
		localStorage.setItem('readList', JSON.stringify(obj))
	}
}

export function localStorageGetter(type, index) {
	let key = `${type}-${index}`
	let list = localStorage.getItem('readList')
	if (list) {
		let parsedList = JSON.parse(list)
		if (parsedList[key]) {
			return true
		} else {
			return false
		}
	} else {
		return false
	}
}
