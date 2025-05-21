'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const languages = [
  { code: 'ar', name: 'العربية', flag: '/images/flags/ar.png' },
  { code: 'en', name: 'English', flag: '/images/flags/en.png' },
  { code: 'tr', name: 'Türkçe', flag: '/images/flags/tr.png' }
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'ar';

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (locale: string) => {
    const currentPath = pathname.replace(/^\/[a-z]{2}/, '');
    const newPath = `/${locale}${currentPath}`;
    router.push(newPath);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
      >
        <div className="relative w-5 h-5">
          <Image
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            fill
            className="object-contain rounded-sm"
          />
        </div>
        <span>{currentLanguage.name}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages
              .filter(lang => lang.code !== currentLocale)
              .map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                  role="menuitem"
                >
                  <div className="relative w-5 h-5">
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      fill
                      className="object-contain rounded-sm"
                    />
                  </div>
                  <span>{lang.name}</span>
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
} 