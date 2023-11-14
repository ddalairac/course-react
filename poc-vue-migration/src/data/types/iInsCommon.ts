/* eslint-disable no-shadow */
export enum eStatus {
  danger = 'danger',
  info = 'info',
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  warning = 'warning',
}

export interface iCommBadge {
  text: string;
  status?: eStatus;
}
