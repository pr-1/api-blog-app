export interface UserModel {
  name: string;
  age: number;
  gender: Gender;
}

enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  TRANGENDER = 'Transgender',
}
