import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  addTable,
  deleteTable,
  getTables,
  updateTable,
} from '@/services/tableService';
import { Table } from '@/utils/types';

export const useTable = () => {
  return useQuery({
    queryKey: ['tables'],
    queryFn: getTables,
    staleTime: 1000 * 60 * 5, // กำหนดเวลาให้ ระบบดึงข้อมูลจาก cache แทนการยิง API ถ้าเกิน 5 นาทีนี้ ระบบจะยิง API เพื่อดึงข้อมูลมาใหม่
  });
};

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

export const useUpdateTable = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: Table['status'] }) =>
      updateTable(id, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tables'] });
    },
  });
};

export const useDeleteTable = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTable(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tables'] });
    },
    onError: (error) => {
      console.error('Delete table failed:', error);
    },
  });
};
