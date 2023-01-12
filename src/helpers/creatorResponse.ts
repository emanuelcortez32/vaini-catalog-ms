type ResponseOK = {
    statusCode: 200 | 201,
    data?: any
}

type ResponseNoOK = {
    statusCode: 400 | 401 | 403 | 404 | 409 | 500,
    code: string,
    message?: string,
    errors?: any
}

export const createResponseOk = (data?: any): ResponseOK => ({ statusCode: 200, data });
export const createResponseCreatorOk = (data?: any): ResponseOK => ({ statusCode: 201, data });
export const createErrorResponseBadRequest = (err?: Error): ResponseNoOK => ({
    statusCode: 400,
    code: 'BAD_REQUEST',
    message: err?.message || "",
    errors: err?.stack || ""
})
export const createErrorResponseUnAuthorized = (err?: Error): ResponseNoOK => ({
    statusCode: 401,
    code: 'NO_AUTHORIZED',
    message: err?.message || "",
    errors: err?.stack || ""
}) 
export const createErrorResponseForbidden = (err?: Error): ResponseNoOK => ({
    statusCode: 403,
    code: 'FORBIDDEN',
    message: err?.message || "",
    errors: err?.stack || ""
})
export const createErrorResponseNotFound = (err?: Error): ResponseNoOK => ({
    statusCode: 404,
    code: 'NOT_FOUND',
    message: err?.message || "",
    errors: err?.stack || ""
})
export const createErrorResponseConflict = (err?: Error): ResponseNoOK => ({
    statusCode: 409,
    code: 'CONFLICT',
    message: err?.message || "",
    errors: err?.stack || ""
})
export const createErrorResponseGeneric = (err?: Error): ResponseNoOK => ({
    statusCode: 500,
    code: 'GENERIC_ERROR',
    message: err?.message || "",
    errors: err?.stack || ""
})