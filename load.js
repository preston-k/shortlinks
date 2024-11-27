let pre = window.location.host.split('.')[0]

const urlParams = new URLSearchParams(window.location.search)
console.log(pre)
console.log(urlParams.get('p'))
