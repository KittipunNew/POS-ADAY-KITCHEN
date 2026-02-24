'use client';

import MenuList from './MenuList';
import SearchInput from './SearchInput';
import { useState } from 'react';

const MenuContent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="bg-white p-5 rounded-xl">
      <SearchInput onSearch={setSearchQuery} />
      <MenuList searchQuery={searchQuery} />
    </div>
  );
};
export default MenuContent;
