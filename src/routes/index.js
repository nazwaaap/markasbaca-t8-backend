const express = require("express")

const testRoutes = require("./test_routes")
const categoryRouter = require("./category_routes")
const bookRouter = require("./book_routes")
const borrowingRouter = require("./borrowing_routes")
const authorRouter = require("./author_routes")
const borrowerRouter = require("./borrower_routes")

const routes = express.Router()

routes.use(testRoutes)
routes.use(categoryRouter)
routes.use(bookRouter)
routes.use(borrowingRouter)
routes.use(authorRouter)
routes.use(borrowerRouter)

module.exports = routes