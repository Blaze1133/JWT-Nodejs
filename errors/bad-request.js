const CustomAPIError = require('./custom-error')
const {StatusCodes} = require('http-status-codes') // this package helps us in finding the status codes of rquest without remembering them

class BadRequestError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequestError;