const CustomAPIError = require('./custom-error')
const { StatusCodes } = require('http-status-codes') // this package helps us in finding the status codes of rquest without remembering them

class UnAuthorizedError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnAuthorizedError;