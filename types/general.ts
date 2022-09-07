export type NewData = {
  title:string;
  category:string;
  page:string;
  date:string;
  description:string;
  author:string;
  coverPhoto:string;
  link:string;
}

export type EventDataRequest = {
  id:number;
  title:string;
  description:string;
  initDate:string;
  endDate:string;
  hasRegistration:boolean;
  flyer1:string;
  flyer2:string;
  subevents:SubeventRequest[];
}

export type SubeventRequest = {
  id:number;
  event:number;
  name:string;
  description:string;
  initDate:string;
  endDate:string;
  hasRegistration:string;
  flyer:string;
}

export type SubeventData = {
  description:string;
  endDate:string;
  event:number;
  flyer:string;
  hasRegistration:boolean;
  id:number;
  initDate:string;
  isFull:boolean;
  limitAssistants:number;
  name:string;
  numAssistants:string;
  speakers: Speakers[];
}

type Speakers = {
  id:number;
  coverPhoto:string;
  description:string;
  firstName:string;
  lastName:string;
  profilePhoto:string;
  title:string;
}

export type RecommendationData = {
  fullName:string;
  email:string;
  subject:string;
  message:string;
}

export type RegisterSubeventData = {
  school:number;
  career:number;
  email:string;
  name:string;
  controlNumber:string;
  id:number;
}

export type GetSchoolsAndCarrersData = {
  schools: SchoolOrCarrerData[];
  careers: SchoolOrCarrerData[];
}

export type SchoolOrCarrerData = { id:number, name:string, visible:boolean }