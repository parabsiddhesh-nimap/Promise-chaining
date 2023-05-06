const fakeRequest = (url) => {
    return new Promise((resolve,reject) => {
        const delay = Math.floor(Math.random() * 4000) + 500;
        console.log(delay)
        setTimeout(() => {
            if(delay > 3000) reject(`connection Timeout for ${url}`)
                 else resolve(`Here Is your Fake data from ${url}`)
        },delay)
    })
};


fakeRequest("www.google.com")
.then((data) => {
    console.log(`Request1 Passed, ${data}`)
    return fakeRequest("www.google.com/gmail")
})
.then((data) => {
    console.log(`Request2 Passed, ${data}`)
    return fakeRequest("www.google.com/photos")
})
.then((data) => {
    console.log(`Request3 Passed, ${data}`)
    return fakeRequest("www.google.com/maps")
})
.then((data) => console.log(`Request4 Passed, ${data}`))
.catch((err) => console.log(`Error Ocurred,  ${err}`))