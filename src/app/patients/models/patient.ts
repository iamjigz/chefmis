export interface Patient {
  ref?: string;
  id: string;
  firstName: string;
  lastName: string;
  dateAdmitted: Date;
  department: string;
  bedNo: number;
  dietType: string;
  status: string;
  remarks: string;
}
