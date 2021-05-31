export interface iOrigin {
  name: string;
  url: string;
}

export interface iLocation {
  name: string;
  url: string;
}

export interface iCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: iOrigin;
  location: iLocation;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
