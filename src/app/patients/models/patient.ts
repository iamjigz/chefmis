export interface Patient {
  ref?: string;
  id: string;
  firstName: string;
  lastName: string;
  dateAdmitted: Date;
  dateDischarged?: any;
  department: string;
  bedNo: number;
  dietType: string;
  status: string;
  remarks: string;
}
