const firebaseConfig = {
  apiKey: 'AIzaSyAo5O10Cp_J1mRnjbzlO73Bh4CzON_M3DE',
  authDomain: 'link-track-2a944.firebaseapp.com',
  databaseURL: 'https://link-track-2a944-default-rtdb.firebaseio.com',
  projectId: 'link-track-2a944',
  storageBucket: 'link-track-2a944.firebasestorage.app',
  messagingSenderId: '1067163047529',
  appId: '1:1067163047529:web:42db51ec6e467d9f5974f8',
}
firebase.initializeApp(firebaseConfig)
let database = firebase.database()

const urlParams = new URLSearchParams(window.location.search)
// let pre = urlParams.get('pre')
// if (pre == null || pre == '' || pre == undefined) {
//   document.querySelector('#load').style.display = 'none'
//   document.querySelector('#error').style.display = 'flex'
// }

let pre = window.location.host.split('.')[0]

console.log(pre)
console.log(urlParams.get('p'))
console.log(pre)
