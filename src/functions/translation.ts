export async function getLocaleJson(locale: string) {
    const obj = await import(`../translations/${locale}.json`).then(obj => obj.default).catch(() => {
        throw `locale ${locale} not found`;
    });
    return obj;
}
