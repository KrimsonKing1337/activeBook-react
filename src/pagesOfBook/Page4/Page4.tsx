import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useAudio } from 'hooks/effects/audio';

export const Page4 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/electric-gate-close.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <p>
        Ворота, наконец, закрылись за спиной. Щёлканье стихло. Лишь тревожные мысли никуда не
        делись и продолжали свой монолог.
      </p>
      <p>
        С другой стороны, восхищение и гордость одолевали его до сих пор. Достижения наших
        учёных всё же потрясают. Не каждый день человек летит заглянуть за границы вселенной. А
        ведь совсем недавно люди жили лишь на Земле и не знали, как добраться до ближайших
        экзопланет. Да-а, технический прогресс не стоит на месте. И глядя вокруг себя невольно
        улыбаешься от того, что человечество смогло создать.
      </p>
      <p>
        – Егор! - кто-то окликнул сзади.
      </p>
      <p>
        Обернувшись, он заметил своего надзорного врача и замедлил шаг.
      </p>
      <p>
        – Здравствуй! - они пожали руки, – ну-ка дай-ка на тебя взглянуть.
      </p>
      <p>
        Человек в белом халате достал из кармана переносное устройство и навёл его на Егора.
      </p>
      <p>
        – Та-ак. Это в норме, это в норме, зафиксирован недосып.. – забубнил врач, – а вот пульс! Ты
        чего так волнуешься? Таблетки принял?
      </p>
      <p>
        – Да, – соврал человек без халата.
      </p>
      <p>
        – Если бы принял, пульс был бы в норме. Мы же обсуждали это тысячу раз. И спалось бы
        нормально! Ай ладно, как хочешь.. - махнул он рукой, – таблетки всё-таки назначаются не в
        приказном порядке.
      </p>
      <p>
        – Я могу идти?
      </p>
      <p>
        – Иди уж.
      </p>
      <p>
        И Егор зашагал дальше.
      </p>
      <p>
        Уже через несколько часов старт. Ну как через несколько.. Через 15. Наш герой явно не
        любил опаздывать.
      </p>
    </PageWrapper>
  );
};