const button = document.querySelector('button')

button.addEventListener('click', () => {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
            const notification = new Notification('example notification', {
                body: Math.random(),
                data: { hello: 'world' },
                tag: 'welcome message'
            })

            notification.addEventListener('error', e => {
                alert('error')
            })
        }
    })
})
let notification
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        new Notification('come back please', {
            body: 'please',
            tag: 'come back'
        })
    } else {
        notification.close()
    }
})