/* eslint-disable prefer-template */

import Service from '@/data/services/Service';
// import i18n from '@/i18n';

export default class TranslateService extends Service {
  translate(key: string): string {
    // const translation = i18n.t(key) as string;
    // // if (key === translation) {
    // //   console.warn(`Missing ${key} on lang translation: ${i18n.locale} `);
    // // }
    // return translation; // + ' ' + i18n.locale
    return 'translation:' + key;
  }

  setLocale(locale: { id: string }): void {
    // i18n.locale = locale.id;
    console.log('locale',locale)
    // // console.log(`Lang: ${i18n.locale} `);
  }

  getLocale():string {
    // return i18n.locale;
    return 'en'
  }
}
