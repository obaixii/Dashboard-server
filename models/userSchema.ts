type Params = {
    req: any,
    res: any,
    next: any
}
export const Test = async ({ req, res, next }: Params) => {
    try {
        console.log(`Hello from the Models`);
    } catch (error) {
        next(error);
    }
}