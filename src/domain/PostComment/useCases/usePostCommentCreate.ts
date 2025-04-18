import {useState} from 'react';

import {postCommentService} from '../postCommentService';

export function usePostCommentCreate(postId: number) {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  async function createComment(message: string) {
    try {
      await postCommentService.create(postId, message);
      setError(null);
    } catch (err) {
      setError(true);
    } finally {
      setloading(false);
    }
  }

  return {
    createComment,
    loading,
    error,
  };
}
