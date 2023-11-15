import { DateTimeFormatOptions } from 'luxon';
import { LocaleOptions } from 'luxon/src/datetime';

export default interface ItsclockConfig {
    interval?: number;
    timeFormat?: (LocaleOptions & DateTimeFormatOptions) | string;
    dateFormat?: (LocaleOptions & DateTimeFormatOptions) | string;
    timeZone?: string;
    locale?: string;
    firstLineFormat?: (LocaleOptions & DateTimeFormatOptions) | string;
    secondLineFormat?: (LocaleOptions & DateTimeFormatOptions) | string;
    capitalize?: boolean;
    ephemerize?: boolean;
}
