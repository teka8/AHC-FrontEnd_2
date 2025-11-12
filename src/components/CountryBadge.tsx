import React, { useMemo } from 'react';
import ReactCountryFlag from 'react-country-flag';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';

type CountryBadgeProps = {
  country: string;
  className?: string;
};

countries.registerLocale(enLocale as countries.LocaleData);

const OVERRIDE_ISO_MAP: Record<string, string> = {
  'cote d\'ivoire': 'CI',
  "ivory coast": 'CI',
  "congo (kinshasa)": 'CD',
  "congo (brazzaville)": 'CG',
  "dr congo": 'CD',
  "drc": 'CD',
  "republic of the congo": 'CG',
  "democratic republic of the congo": 'CD',
  "são tomé and príncipe": 'ST',
  "sao tome": 'ST',
  "cape verde": 'CV',
  "eswatini": 'SZ',
  "swaziland": 'SZ',
  "guinea-bissau": 'GW',
  "the gambia": 'GM',
  "united states": 'US',
  "united states of america": 'US',
  "usa": 'US',
  "uk": 'GB',
  "united kingdom": 'GB',
  "tanzania": 'TZ',
  "lao pdr": 'LA',
};

const formatCountryName = (country: string): string => {
  if (!country) return '';

  return country
    .split(' ')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
};

const determineIsoCode = (normalizedCountry: string): string | null => {
  if (!normalizedCountry) {
    return null;
  }

  const lower = normalizedCountry.toLowerCase();

  if (OVERRIDE_ISO_MAP[lower]) {
    return OVERRIDE_ISO_MAP[lower];
  }

  let iso = countries.getAlpha2Code(normalizedCountry, 'en');
  if (iso) {
    return iso;
  }

  const cleaned = normalizedCountry
    .replace(/\s*\(.*?\)\s*/g, ' ')
    .replace(/&/g, 'and')
    .replace(/[^A-Za-z\s'-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleaned) {
    return null;
  }

  iso = countries.getAlpha2Code(cleaned, 'en');
  if (iso) {
    return iso;
  }

  if (OVERRIDE_ISO_MAP[cleaned.toLowerCase()]) {
    return OVERRIDE_ISO_MAP[cleaned.toLowerCase()];
  }

  const words = cleaned.split(' ');
  if (words.length > 1) {
    const firstTwo = words.slice(0, 2).join(' ');
    iso = countries.getAlpha2Code(firstTwo, 'en');
    if (iso) {
      return iso;
    }
  }

  return null;
};

const CountryBadge: React.FC<CountryBadgeProps> = ({ country, className = '' }) => {
  const normalized = country.trim();
  const displayName = formatCountryName(normalized);
  const iso = useMemo(() => determineIsoCode(normalized), [normalized]);

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 bg-white ${className}`}
    >
      {iso ? (
        <ReactCountryFlag
          countryCode={iso}
          svg
          style={{ width: '1.25rem', height: '0.95rem' }}
          title={displayName}
          aria-label={`${displayName} flag`}
        />
      ) : (
        <span aria-hidden="true" className="text-base leading-none">
          🌍
        </span>
      )}
      <span>{displayName || country}</span>
    </span>
  );
};

export default CountryBadge;
