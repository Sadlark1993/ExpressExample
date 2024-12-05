const posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' },
    { id: 3, title: 'Post Three' }
];

// @desc Get all posts
// @route GET /api/posts
export const getPosts = (req, res) => {
    // dealing with queries
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);
}

// @desc Get a single post
// @route GET /api/posts/:id
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((item) => item.id === id);
    if (!post) {
        const error = new Error(`No post with the id of ${id} was found.`);
        error.status = 404;
        return next(error);
    }
    res.status(200).json(post);
}

// @desc Create a single post
// @route POST /api/posts
export const savePost = (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }

    if (!newPost.title) {
        const error = new Error(`A post must have a title.`);
        error.status = 400;
        return next(error);
    }

    posts.push(newPost);

    res.status(201).json(posts);
}

// @desc Update a single post
// @route PUT /api/posts/:id
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`No post with the id of ${id} was found.`);
        error.status = 404;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
}
