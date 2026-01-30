export enum UserRole { SUPERADMIN = 'SUPERADMIN', ADMIN = 'ADMIN' }
export enum DriverStatus { AVAILABLE = 'Disponible', ABSENT = 'Ausente', RESTING = 'Descansando' }
export interface Store { id: string; name: string; code: string; }
export interface UserSettings { themeColor: 'indigo' | 'emerald' | 'rose' | 'amber' | 'violet'; darkMode: boolean; timezone: 'auto' | 'manual'; manualTimezone?: string; autoDateTime: boolean; manualDateTimeValue?: string; }
export interface User { id: string; username: string; password?: string; role: UserRole; assignedStoreIds: string[]; settings?: UserSettings; twoFactorSecret?: string; isTwoFactorEnabled: boolean; isDeleted?: boolean; }
export interface Driver { id: string; fullName: string; assignedStoreIds: string[]; teamCode: string; baseSchedule: string; fixedSchedule?: string; status: DriverStatus; curp?: string; rfc?: string; nss?: string; photoUrl?: string; isActive: boolean; qrCodeKey?: string; }
export interface Assignment { driverId: string; driverName: string; schedule: string; teamCode?: string; }
export interface RoleVersion { assignments: Assignment[]; updatedAt: string; adminId: string; }
export interface DailyRole { id: string; storeId: string; storeName: string; storeCode: string; date: string; assignments: Assignment[]; adminId: string; createdAt: string; updatedAt?: string; versions?: RoleVersion[]; }