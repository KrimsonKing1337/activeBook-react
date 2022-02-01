import React, { useEffect } from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useAudio } from 'hooks/effects/audio';
import { useFlashlight } from 'hooks/effects/flashlight';
import { useVibration } from 'hooks/effects/vibration';

import { goToPage } from 'utils/book/goToPage';

import styles from './Page0.scss';

export const Page0 = () => {
  const audioInst = useAudio({
    src: '/assets/book_data/audios/sounds/sword.mp3',
    fadeOutWhenUnload: false,
  });

  const { flashlightOff, flashlightOn } = useFlashlight();
  const { vibrationOn } = useVibration();

  useEffect(() => {
    return () => flashlightOff();
  }, []);

  async function go() {
    if (!audioInst) {
      return;
    }

    vibrationOn(1000);

    flashlightOn();

    await audioInst.play();

    goToPage(1);
  }

  function clickHandler() {
    go();
  }

  return (
    <PageWrapper
      withoutToolbar
      title={'Заглянуть за..'}
      subtitle={'Предисловие: все описываемые персонажи события вымышлены, совпадения с реальными — чистая случайность.'}>
      <p className={styles.startReading} onClick={clickHandler}>
        Начать читать
      </p>
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
