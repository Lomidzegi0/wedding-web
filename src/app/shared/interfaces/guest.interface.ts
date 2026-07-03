
export interface Guest {
  name: string;
  attending: boolean | null;
  mobileNumber: string;
  createdAt?: Date;
  id?: string;
}