export class NotFoundError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = "NotFoundError";
    }
}

export class BadRequestError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = "BadRequestError";
    }
}

export class NotAuthorizedError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = "NotAuthorizedError";
    }
}

export class ForbiddenError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = "ForbiddenError";
    }
}

export class ConflictError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = "ConflictError";
    }
}