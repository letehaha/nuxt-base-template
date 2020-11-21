import { detect } from 'detect-browser';

// to check all possible browsers, os and environment types check TS types here:
// https://github.com/DamonOehlman/detect-browser/blob/master/src/index.ts
window.onNuxtReady(() => {
  const browser = detect();

  document.documentElement.classList.add(`is-${browser.type}`);
  document.documentElement.classList.add(`is-${browser.name}`);

  if (browser.os.includes('iOS')) {
    document.documentElement.classList.add('is-ios');
  }
  if (browser.os.includes('Android')) {
    document.documentElement.classList.add('is-android');
  }
  if (browser.os.includes('Windows Mobile')) {
    document.documentElement.classList.add('is-windows-mobile');
  }
  if (browser.os.includes('Windows') && !browser.os.includes('Windows Mobile')) {
    document.documentElement.classList.add('is-windows');
  }
  if (browser.os.includes('Linux')) {
    document.documentElement.classList.add('is-linux');
  }
  if (browser.os.includes('Mac OS')) {
    document.documentElement.classList.add('is-macos');
  }
  if (browser.os.includes('Chrome OS')) {
    document.documentElement.classList.add('is-chromeos');
  }
});
