import React, { useEffect } from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { HowlWrapper } from 'utils/book/HowlWrapper';

export const Page1 = () => {

  // todo: добавить fadeIn / fadeOut
  useEffect(() => {
    const alarmSoundHowlInst = new HowlWrapper({
      src: ['assets/book_data/audios/sounds/alarm-clock.mp3'],
    });

    (async () => {
      await alarmSoundHowlInst.play();
    })();

    return () => alarmSoundHowlInst.unload();
  }, []);

  return (
    <PageWrapper>
      <p>
        Звенел будильник.
        Но он уже не спал, поэтому довольно быстро нажал на кнопку выключения.
      </p>
      <p>
        Впрочем, правильнее сказать — вообще не спал. Сегодня очень важный день. Для него и для
        всего человечества.
      </p>
      <p>
        Глубоко вздохнув и потерев глаза, он встал с кровати и проследовал в ванную.
      </p>
      <p>
        Совершив утренний туалет, он стал готовить себе завтрак и включил телевизор. Не то,
        что бы он особо хотел его смотреть, но полнейшая тишина давила на уши сильнее.
      </p>
      <p>
        В это время года по утрам уже светло, что безусловно его радовало. А ведь после развода его
        мало что радовало.
      </p>
      <p>
        Покончив с завтраком, он выключил телевизор, оделся и стал спускаться к машине.
      </p>
    </PageWrapper>
  );
};
