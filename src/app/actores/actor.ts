export interface actorDTO {
  id: number;
  name: string;
  dateBirth: Date;
  picture: string;
  biography: string;
}

export interface actorCreacionDTO {
  name: string;
  dateBirth: Date;
  picture: File;
  biography: string;
}
