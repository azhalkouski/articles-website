"use client";

import { LocaleEnum } from '../types';

export default function LocaleSelector({ currentLocale = 'en' }) {

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;

    const newPath = `/${newLocale}`;
    window.location.href = newPath;
  };

  return (
    <select onChange={handleLocaleChange} defaultValue={currentLocale}>
      <option value={LocaleEnum.EN}>En</option>
      <option value={LocaleEnum.FR}>Fr</option>
    </select>
  );
};
