import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addMenu, getMenus } from '@/services/menuService';
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
