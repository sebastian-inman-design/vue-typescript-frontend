"use strict"

require("dotenv-flow").config()

const app = require("express")()
const gzip = require("compression")
const server = require("http").createServer(app)
const parser = require("body-parser")
const socket = require("socket.io")(server)

const port = process.env.PORT || process.env.PROXY_PORT || 8000


/**
 * Parse and send data as JSON.
 */

app.use(parser.json())


/**
 * GZip build asset files before serving them.
 */

app.use(gzip())


/**
 * Store the WebSocket server so
 * it can be accessed by server routes.
 */

app.set("socket", socket)


/**
 * Initialize the Express server and create
 * all of the API and HTTP web endpoints.
 */

app.use("/proxy", require("./endpoints/proxy"))
app.use("/webhooks", require("./endpoints/webhooks"))

app.use(require("./endpoints/public"))


/**
 * Listen for WebSocket client connections.
 */

socket.on("connection", client => {
  console.log("Client connected")
  client.on("disconnect", () => console.log("Client disconnected"))
})


/**
 * Start the web server.
 */

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})