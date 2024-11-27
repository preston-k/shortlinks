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
let id = crypto.randomUUID().slice(0, 4)
console.log(id)
document.querySelector('#id-fill').innerHTML = id
document.querySelector('#submit').addEventListener('click', async () => {
  document.querySelector('#loader').style.display = 'flex'
  let prefix
  prefix = document.querySelector('#prefix').value
  console.log(prefix)
  document.querySelector('#pre-fill').innerHTML = prefix
  document.querySelector('#atag').href = `https://${prefix}.prkw.xyz/${id}`
  await database.ref(`/shorts/${prefix}`).update({
    to: document.querySelector('#url').value,
    id: id,
  })

  document.querySelector('#first').style.display = 'none'
  document.querySelector('#final').style.display = 'flex'
  document.querySelector('#loader').style.display = 'none'
})
