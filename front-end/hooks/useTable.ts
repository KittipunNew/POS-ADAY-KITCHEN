import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addTable } from '@/services/tableService';
import { Table } from '@/utils/types';

export const useAddTable = () => {
  const queryClient = useQueryClient();

  return useMutation<Table, Error, Partial<Table>>({
    mutationFn: (newTable) => addTable(newTable),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tables'] });
    },
    onError: (error) => {
      console.error('Add table failed:', error);
    },
  });
};
