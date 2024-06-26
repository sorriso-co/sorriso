// types.ts
export type Treatment =
  | "HOLLYWOOD SMILE"
  | "DENTAL IMPLANT"
  | "TEETH WHITENING"
  | "ORTHODONTICS"
  | "DENTAL CROWNS";

export interface Testimonial {
  profileImage: string;
  name: string;
  age: number;
  country: string;
  countryFlag: string;
  treatment: Treatment;
  description: string;
  videoLink: string;
  beforeImage: string;
  afterImage: string;
}
