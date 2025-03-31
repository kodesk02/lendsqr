export interface Education {
    levelofeducation: string;
    employmentstatus: string;
    sector: string;
    duration: string;
    officialemail: string;
    monthlyincome: string;
    loanrepayment: string;
  }
  
  export interface Socials {
    twitter: string;
    facebook: string;
    instagram: string;
  }
  
  export interface Guarantor {
    fullname: string;
    phone: string;
    email: string;
    relationship: string;
  }
  
  export interface UserDetails {
    id: string;
    organization: string;
    username: string;
    email: string;
    phonenumber: string;
    datejoined: string;
    status: string;
    salary: string;
    bank: string;
    bvn: string;
    gender: string;
    maritialstatus: string;
    children: number;
    typeofresidence: string;
    education: Education[];
    socials: Socials[];
    guarantor: Guarantor[];
  }
  
  export interface User {
    details: UserDetails;
  }
  
  export interface UsersResponse {
    users: User[];
  }
  