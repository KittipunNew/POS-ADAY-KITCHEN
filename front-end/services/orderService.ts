import { api } from '@/lib/axios';

export const getOrderCustomer = async (tableId: string) => {
  try {
    const res = await api.get(`http://localhost:5000/api/orders/${tableId}`);
    return res.data;
  } catch (error) {
    throw new Error('ดึงข้อมูลไม่สำเร็จ');
  }
};
