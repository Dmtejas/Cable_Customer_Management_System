import { errorConstants } from "../constants.js"

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode
    const { 
        BAD_REQUEST,
        UNAUTHORIZED,
        FORBIDDEN,
        NOT_FOUND,
        INTERNAL_SERVER_ERROR
    } = errorConstants;

    let title = ''

    switch(statusCode) {
        case BAD_REQUEST: 
            title = "Bad request"
            break;
        case UNAUTHORIZED:
            title = "Unauthorized access"
            break;
        case FORBIDDEN:
            title = "Forbidden Resource"
            break;
        case NOT_FOUND:
            title = "Not found"
            break;
        case INTERNAL_SERVER_ERROR:
            title = "Internal Server Error"
            break;
        default:
            title = "UNKNOWN ERROR"                    
    }

    res.status(statusCode).json({
        title,
        message: err.msg,
        stackTrace: err.trace
    })

}

export {errorHandler}