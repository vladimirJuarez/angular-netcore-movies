export interface actorEdicionDTO {
  name: string;
  dateBirth: Date;
  picture: string;
  //biografia: string;
}

export interface actorCreacionDTO {
  name: string;
  dateBirth: Date;
  picture: File;
  biography: string;
}
