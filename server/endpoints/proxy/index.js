"use strict"

const axios = require("axios")
const express = require("express")
const router = express.Router()

const { endpoint, token } = require("../../../source/config/api")

router.use(express.json())

class Proxy {

  constructor(req, res) {

    this.headers = {}
    this.query = req.search || ""
    this.request = req.url.replace("/proxy", "")
    this.endpoint = `${endpoint}${this.request}${this.query}`

    this.headers['Client-Token'] = token
    this.headers['Auth-Token'] = req.header('Auth-Token') || null

  }

}


/**
 * Handle all other GET requests.
 */

router.get("*", (req, res) => {

  const proxy = new Proxy(req, res)

  axios.get(proxy.endpoint, { headers: proxy.headers })
    .then(response => res.send(response.data))
    .catch(error => res.status(error.response.status).send(error.response.data))

})

router.post("*", (req, res) => {

  const proxy = new Proxy(req, res)

  axios.post(proxy.endpoint, req.body.data, { headers: proxy.headers })
    .then(response => res.send(response.data))
    .catch(error => res.status(error.response.status).send(error.response.data))

})

module.exports = router