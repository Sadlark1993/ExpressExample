const notFound = (req, res, next) => {
    const error = new Error('Error 404. Not found.');
    error.status = 404;
    next(error);
}

export default notFound;