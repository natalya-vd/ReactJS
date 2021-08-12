export function getCommentsSelector (state) {
    return state.comments.comments;
}

export function getCommentsSelectorError (state) {
    return state.comments.error;
}

export function getCommentsSelectorLoading (state) {
    return state.comments.isLoading;
}
