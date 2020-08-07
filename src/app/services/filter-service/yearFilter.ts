import { GenericFilter } from 'src/app/models/Genericfilters';

export const yearFilter: GenericFilter = {
  title: 'Launch Year',
  options: Array.apply(null, { length: 15 })
    .map(Number.call, Number)
    .map((j) => j + 2006),
  key: 'launch_year',
};
