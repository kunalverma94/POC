import { Links } from './Links';

export interface SpaceShuttle {
  flight_number: number;
  mission_name: string;
  mission_id: any[];
  launch_year: string;
  launch_success: boolean;
  land_success: boolean;
  rocket: any;
  links: Links;
  show: boolean;
}
