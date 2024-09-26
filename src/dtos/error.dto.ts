export class ErrorDto extends Error {
    public constructor(public message: string, public statusCode?: string) {
        super(message);
        this.name = 'ErrorDto';
        this.statusCode = statusCode;
    }
}