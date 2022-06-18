import { useEffect, useState } from 'react';

import { play as achievementPlay } from 'utils/effects/achievement';
import { konamiCodeHandler } from 'utils/effects/konamiCodeHandler';

import { localStorageFlag } from './utils';

export function useKonamiCode() {
  useEffect(() => {
    const cb = () => achievementPlay('Retro gaming rules!', 'konami');

    const handler = konamiCodeHandler(cb);

    document.addEventListener('keydown', handler, false);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, []);
}

export function useModal() {
  const [modalIsActive, setModalIsActive] = useState(false);

  const modalOnClose = () => {
    setModalIsActive(false);

    localStorage.setItem(localStorageFlag, JSON.stringify(true));
  };

  return { modalIsActive, modalOnClose, setModalIsActive };
}
