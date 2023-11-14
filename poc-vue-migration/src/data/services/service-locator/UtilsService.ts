import Service from '@/data/services/Service';
import SL from '@/data/services/ServiceLocator';

export default class UtilsService extends Service {

  /** Add a delay only in develop mode */
  devDelay(timeout: number): Promise<void> {
    return new Promise(resolve => {
      if (process.env.NODE_ENV === 'development') {
        setTimeout(() => {
          resolve(null);
        }, timeout);
      } else {
        resolve(null);
      }
    })
  }

  onCardMouseenter(event: MouseEvent): void {
    const vdsCard = event.target as HTMLElement;
    if (vdsCard) {
      const nodeList = vdsCard.querySelectorAll('.main-action') || [];
      nodeList.forEach((button) => {
        if (button.classList.contains('btn-secondary')) {
          button.classList.remove('btn-secondary');
        }
        button.classList.add('btn-primary');
      });
    }
  }
  onCardMouseleave(event: MouseEvent): void {
    const vdsCard = event.target as HTMLElement;
    if (vdsCard) {
      const nodeList = vdsCard.querySelectorAll('.main-action') || [];
      nodeList.forEach((button) => {
        if (button.classList.contains('btn-primary')) {
          button.classList.remove('btn-primary')
        }
        button.classList.add('btn-secondary');
      });
    }
  }

  /** Receives a string, converts it to date and formats it based on language */
  public dateFormat(
    date: string,
    customOptions?: DateTimeFormatOptions,
  ): string {
    const options: DateTimeFormatOptions = customOptions || {
      // localeMatcher: 'best fit', weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h12',
      hour12: true,
      // era: 'short', timeZoneName: 'short',
    };

    let parseDate = new Date(date);
    let formatDate = parseDate.toLocaleDateString(
      SL.lang.getLocale(),
      options as Intl.DateTimeFormatOptions,
    );

    // Safari fix
    if (formatDate === 'Invalid Date') {
      const arrDate = date.split(' ');
      const newStrDate = (arrDate[0] && arrDate[1])
        ? `${arrDate[0]}T${arrDate[1]}`
        : date.slice(0, 10);
      parseDate = new Date(newStrDate);
      formatDate = parseDate.toLocaleDateString(
        SL.lang.getLocale(),
        options as Intl.DateTimeFormatOptions,
      );
    }
    return formatDate;
  }


}

interface DateTimeFormatOptions {
  localeMatcher?: 'lookup' | 'best fit';
  weekday?: 'long' | 'short' | 'narrow';
  era?: 'long' | 'short' | 'narrow';
  year?: 'numeric' | '2-digit';
  month?: 'long' | 'numeric' | '2-digit' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  timeZoneName?: 'short' | 'long';
  formatMatcher?: string;
  hourCycle?: 'h12' | 'h24';
  hour12?: boolean;
  timeZone?: string;
}
