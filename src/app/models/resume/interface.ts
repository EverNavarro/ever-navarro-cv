import { TError } from "./types";

export interface ISocialNetwork {
  network: string,
  username: string,
  url: string
}

export interface ILocation {
  address: string,
  postalCode: string,
  city: string,
  state: string
}

export interface IBasics {
  name: string;
  lastname: string;
  correo: string,
  phone: string,
  website: string,
  location: ILocation,
  socialNetworks: ISocialNetwork[],
}

export interface IResume {
  avatar: string;
  basics: IBasics;
  // experience: IExperience:
  // education: IEducation:
  // skills: ISkills:
  // languages: ILanguages:
}

export interface IStatus {
  mySelf: boolean;
  data: number;
  nombre: string;
}

export interface IErrorType {
  error: TError
}
