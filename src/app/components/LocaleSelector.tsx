"use client";

import { DEFAULT_LOCALE } from '../constants';
import { LocaleEnum } from '../types';

export default function LocaleSelector({ currentLocale = 'en' }) {

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let newLocale = event.target.value;

    if (newLocale === DEFAULT_LOCALE) {
      newLocale = '';
    }

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
