export interface Patient {
  ref?: string;
  firstName: string;
  lastName: string;
  dateAdmitted: Date;
  dateDischarged?: any;
  ward: string;
  bedNo: number;
  diet: string;
  isAdmitted: boolean;
  remarks: string;
}
