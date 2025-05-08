export async function loadLocale(locale) {
    const response = await import(`../locales/${locale}.json`);
    return response.default;
  }
  