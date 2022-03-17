import React, { useEffect, useState } from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useAudio } from 'hooks/effects/audio';
import { useFlashlight } from 'hooks/effects/flashlight';
import { useVibration } from 'hooks/effects/vibration';

import { goToPage } from 'utils/control/goToPage';
import { play as achievementPlay } from 'utils/effects/achievement';
import { konamiCodeHandler } from 'utils/effects/konamiCodeHandler';

import styles from './Page0.scss';

export const Page0 = () => {
  const [ lastPage, setLastPage ] = useState(1);

  const audioInst = useAudio({
    src: '/assets/book_data/audios/sounds/sword.mp3',
    fadeOutWhenUnload: false,
  });

  const { flashlightOff, flashlightOn } = useFlashlight();
  const { vibrationOn } = useVibration();

  useEffect(() => {
    return () => flashlightOff();
  }, []);

  useEffect(() => {
    const cb = () => achievementPlay('Retro gaming rules!', 'konami');

    const handler = konamiCodeHandler(cb);

    document.addEventListener('keydown', handler, false);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, []);

  useEffect(() => {
    const lastPageAsJSON = localStorage.getItem('lastPage');

    if (lastPageAsJSON) {
      const page = JSON.parse(lastPageAsJSON);

      setLastPage(page);
    }
  }, []);

  async function go() {
    if (!audioInst) {
      return;
    }

    vibrationOn(1000);

    flashlightOn();

    await audioInst.play();

    const pageToGo = lastPage > 0 ? lastPage : 1;

    goToPage(pageToGo);
  }

  function clickHandler() {
    go();
  }

  const label = lastPage > 0 ? 'Продолжить читать' : 'Начать читать';

  return (
    <PageWrapper withoutToolbar>
      <header>
        Заглянуть за..
      </header>

      <article>
        Предисловие: все описываемые персонажи события вымышлены, совпадения с реальными — чистая случайность.
      </article>

      <div className={styles.startReading} onClick={clickHandler}>
        {label}
      </div>

      <p />
      <p />
      <p>
        P.S.: случайно и неслучайно забредшим, напоминание:
      </p>
      <p>
        это <b>не финальная</b> версия рассказа.
      </p>
      <p>
        Некоторые части повествования и/или эффектов могут меняться.
      </p>
      <p>
        Спасибо за понимание.
      </p>
    </PageWrapper>
  );
};
