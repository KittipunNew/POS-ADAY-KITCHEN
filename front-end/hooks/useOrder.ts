import { useQuery } from '@tanstack/react-query';
import { getOrderCustomer } from '@/services/orderService';

export const useGetOrders = (tableId: string) => {
  return useQuery({
    queryKey: ['orders', tableId],
    queryFn: () => getOrderCustomer(tableId),
    enabled: !!tableId, // รัน query เมื่อมี tableId เท่านั้น
  });
};
