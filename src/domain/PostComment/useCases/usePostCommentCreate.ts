import {useState} from 'react';

import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommentTypes';

interface Options {
  onSucess?: (data: PostComment) => void;
}

export function usePostCommentCreate(postId: number, options?: Options) {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  async function createComment(message: string) {
    try {
      setloading(true);
      setError(null);
      const PostCommentResponse = await postCommentService.create(
        postId,
        message,
      );

      if (options?.onSucess) {
        options.onSucess(PostCommentResponse);
      }
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
