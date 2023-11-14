import type eStatus from './eStatus';

export interface iSession {
  roles: iRol[];
  tokens: { id: string } | null;
  user_info: iSessionUserInfo | null;
}

export interface iSessionUserInfo {
  company_id: string;
  company_name: string;
  created_at: string;
  created_by: string;
  current_migration: boolean;
  customer_id: string;
  email: string;
  employee_id: string;
  first_name: string;
  id: string;
  idp_reference_id: string;
  last_login_date: string;
  last_name: string;
  modified_at: string;
  nextgen_platform_enabled: boolean;
  preferences: iPreferences;
  roles: iRol[];
  status: eStatus | string;
  username: string;
}


export interface iPreferences {
  lang: string;
  notificaciones: iNotification[];
}

export interface iNotification {
  chat: boolean;
  email: boolean;
  type: string;
}

export interface iRol {
  id: string;
  type: string;
  name: string;
  display_name: string;
  disabled?: boolean; // not in the API, is for FE display purpose
}
