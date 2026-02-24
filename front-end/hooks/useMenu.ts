import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addMenu, deleteMenu, getMenus } from '@/services/menuService';
import { Menu } from '@/utils/types';

export const useMenu = () => {
  return useQuery({
    queryKey: ['menus'],
    queryFn: getMenus,
    staleTime: 1000 * 60 * 5,
  });
};

export const useAddMenu = () => {
  const queryClient = useQueryClient();

  return useMutation<Menu, Error, Partial<Menu>>({
    mutationFn: (newMenu) => addMenu(newMenu),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['menus'] });
    },
    onError: (error) => {
      console.error('Add menu failed:', error);
    },
  });
};

export const useDeleteMenu = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteMenu(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['menus'] });
    },
    onError: (error) => {
      console.error('Delete menu failed:', error);
    },
  });
};
