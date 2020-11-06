const port = process.env.NODE_ENV === "production" ? "" : 5000
const version = process.env.API_VERSION || "v1"
const url = process.env.API_URL || "http://localhost"
const endpoint = `${url}:${port}/${version}`
const token = process.env.API_CLIENT_TOKEN || "super-secret-api-token-goes-here"

module.exports = { port, version, url, endpoint, token }
