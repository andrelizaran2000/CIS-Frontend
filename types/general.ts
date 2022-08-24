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