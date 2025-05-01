import {useState} from 'react';

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

/** @deprecated use useMutation from `@tanstack/react-query`*/
export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>,
) {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  async function mutate(variables: TVariables) {
    try {
      setloading(true);
      setError(null);
      const data = await mutationFn(variables);

      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    } catch (err) {
      if (options?.onError) {
        options.onError(options.errorMessage || '');
      }
      setError(true);
    } finally {
      setloading(false);
    }
  }

  return {
    mutate,
    loading,
    error,
  };
}
