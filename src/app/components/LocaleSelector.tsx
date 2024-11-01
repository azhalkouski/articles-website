"use client";

import { useRouter } from 'next/navigation';
import { Locale, LocaleEnum } from '../types';
import { LOCALE_OPTION_EN, LOCALE_OPTION_FR } from '../constants';

export default function LocaleSelector({ currentLocale }: { currentLocale: Locale; }) {
  const router = useRouter();

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;

    const newPath = `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <select onChange={handleLocaleChange} defaultValue={currentLocale}>
      <option value={LocaleEnum.EN}>{LOCALE_OPTION_EN}</option>
      <option value={LocaleEnum.FR}>{LOCALE_OPTION_FR}</option>
    </select>
  );
};
