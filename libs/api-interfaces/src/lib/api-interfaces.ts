export interface Application{
  id: string;
  name: string;
  description: string;
  contributors: number;
  percentComplete: number;
}

export const emptyApplication = {
  id: '',
  name: '',
  description: '',
  contributors: 0,
  percentComplete: 0
}