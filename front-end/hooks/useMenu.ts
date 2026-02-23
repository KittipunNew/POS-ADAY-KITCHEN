import { useQuery } from '@tanstack/react-query';
import { getMenus } from '@/services/menuService';

export const useMenu = () => {
  return useQuery({
    queryKey: ['menus'], // Key สำหรับอ้างอิง Cache
    queryFn: getMenus, // ฟังก์ชันดึงข้อมูลที่สร้างไว้ใน service
    staleTime: 1000 * 60 * 5, // เก็บข้อมูลไว้ 5 นาทีโดยไม่ดึงใหม่ถ้าไม่มีการเปลี่ยนแปลง
  });
};
