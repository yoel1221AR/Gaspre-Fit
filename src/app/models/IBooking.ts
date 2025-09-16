export interface Booking {
id: number;
  name: string;
  teacher: string;
  slots: number;
  description: string;
  date: Date;
  imageUrl?: string;
}