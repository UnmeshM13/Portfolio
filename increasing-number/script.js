const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const incr = target /1000

        if(c < target) {
            counter.innerText = `${Math.ceil(c+incr)}`
            setTimeout(updateCounter, 2)
        }
    }

    updateCounter()
})