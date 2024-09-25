// utils/cookies.ts

import Cookies from 'js-cookie';

export const removeTrackingCookies = () => {
  const cookiesToRemove = ['_ga', '_gid', '_gat', 'fbp', 'sorrisoCookieConsent'];

  cookiesToRemove.forEach((cookieName) => {
    Cookies.remove(cookieName, { path: '/' });
  });

  console.log('Tracking cookies removed');
};
