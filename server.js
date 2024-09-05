// connect the nodejs network
const app = require("./src/app");

const PORT = 3046

// server listens on port
const server = app.listen(PORT, () => {
    console.log(`WSV eCommerce Backend Express starts with the port ${PORT}`)
})

// server out
// process is NodeJS.Process
process.on('SIGINT', () => {
    server.close(() => {
        console.log('WSV eCommerce Backend Express exits')
    })
})