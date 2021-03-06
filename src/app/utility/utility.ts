import { environment } from 'src/environments/environment';

export const setTheme = (mode: string) =>
  Object.keys(environment.appsettings.THEMES[mode]).forEach((c) =>
    window.document.documentElement.style.setProperty(c, environment.appsettings.THEMES[mode][c])
  );
