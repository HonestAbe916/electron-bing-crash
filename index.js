const {ipcRenderer, remote} = require('electron')
const form = document.getElementById('search-form')

onload = () => {
	const webview = document.querySelector('webview')
	webview.addEventListener('dom-ready', () => {
		form.addEventListener('submit', function (e) {
			e.preventDefault()
			webview.loadURL(document.getElementById('search').value)
		})
	})

	webview.addEventListener('did-navigate', (e) => {
		document.getElementById('search').value = e.url
	})
}

function goBack() {
	const webview = document.querySelector('webview')
	if (webview.canGoBack())
		webview.goBack()
}

function goForward() {
	const webview = document.querySelector('webview')
	if (webview.canGoForward())
		webview.goForward()
}