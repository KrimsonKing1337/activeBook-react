import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useAudio } from 'hooks/effects/audio';
import { useRain } from 'hooks/effects/flashlight/rain';

export const Page12 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/rain-and-thunder.mp3',
    loop: true,
    playOnLoad: true,
    bg: true,
  });

  useRain();

  return (
    <PageWrapper>
      <p>
        Снился дождь. Сильный, тяжёлый. Наш герой не видел дождей с осени и уже успел соскучиться по этому
        природному явлению. Пусть просто во сне, но всё равно приятно. Плюс к этому ещё и не мокнешь.
      </p>
      <p>
        И будто нужно было куда-то бежать. Прочь оттуда, бежать от дождя. Снился отец, которого Егор так любил.
        Он что-то кричал ему, но слова было не разобрать из-за сильного ливня.
      </p>
      <p>
        Тогда отец Егора пошёл в сарай. А когда вернулся – в его в руках было ружьё.
      </p>
      <p>
        Он прицелился.
      </p>
    </PageWrapper>
  );
};
