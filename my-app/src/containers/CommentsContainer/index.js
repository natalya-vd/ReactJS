import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { CircularProgress } from '@material-ui/core';

import { getCommentsSelector, getCommentsSelectorError, getCommentsSelectorLoading, getAllComments } from '../../store/comments';

export function CommentsContainer() {
  
  const dispatch = useDispatch();

  const loading = useSelector(getCommentsSelectorLoading);
  const comments = useSelector(getCommentsSelector);
  const error = useSelector(getCommentsSelectorError);

  const requestComments = () => {
    dispatch(getAllComments());
  };

  useEffect(() => {
    requestComments();
  }, []);

  
  const renderComments = useCallback(
    (comments) => {
      return <li key={comments.id}>{comments.name}</li>
    },
    []
  );

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <>
        <h3>Ошибка!</h3>
        <button onClick={requestComments}>Повторить запрос</button>
      </>
    );
  }
  
    return <ul>{comments.map(renderComments)}</ul>;
};
  