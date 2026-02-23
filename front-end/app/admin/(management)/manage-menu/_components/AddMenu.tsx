'use client';
import { useState } from 'react';
import { Field, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import SelectCategory from './SelectCategory';
import { Button } from '@/components/ui/button';

const AddMenu = () => {
  const [formData, setFormData] = useState({
    name: '',
    categoty: '',
    price: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const hadleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('ข้อมูลที่จะส่งไป API:', formData);
  };

  return (
    <form
      className="p-5 shadow border bg-white rounded-2xl max-w-xl"
      onSubmit={hadleSubmit}
    >
      <FieldGroup className="grid max-w-xl grid-cols-2">
        <Field>
          <Input
            type="text"
            placeholder="ชื่อเมนู"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <SelectCategory />
        </Field>
        <Field className="flex">
          <Input
            type="number"
            placeholder="ราคา"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </Field>
      </FieldGroup>
      <Button type="submit" className="w-full mt-5 bg-yellow-500" size={'lg'}>
        เพิ่มเมนู
      </Button>
    </form>
  );
};
export default AddMenu;
