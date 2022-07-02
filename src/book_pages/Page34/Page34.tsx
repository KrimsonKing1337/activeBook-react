import React from 'react';

import { ModalDialog } from 'components';

import { PageWrapper } from 'components/PageWrapper';

import { useModal } from './hooks';

export const Page34 = () => {
  const { modalIsActive, modalOnClose } = useModal();

  return (
    <PageWrapper>
      <ModalDialog
        isOpen={modalIsActive}
        onClose={modalOnClose}
        onConfirm={modalOnClose}
        onCancel={modalOnClose}
        hideExpandButton={true}
        showCancelButton={false}
      >
        <div>
          <p>
            Дальше, чтобы не выжигать дорогому читателю глаза, я отключаю эффект инверсии цвета
            (актуально для тёмной темы).
          </p>
          <p>
            Но чтобы было понимание, что герой находится "по ту сторону изгороди" я буду отображать точки по углам.
          </p>
          <p>
            Больше эта модалка вас не побеспокоит
          </p>
        </div>
      </ModalDialog>

      <h1>
        Глава 6.
      </h1>
      <h2>
        По ту сторону изгороди.
      </h2>

      <p>
        Впереди по-прежнему ничего не было. Лишь бесконечный белый свет, ослепляющий героя. Как будто самым мощным
        прожектором светили прямо в лицо.
      </p>
      <p>
        Поэтому, в первую очередь, Егор закрыл иллюминаторы.
      </p>
      <p>
        Информация, поступающая на дисплеи двигалась невыносимо быстро. Её было очень много. Но толку от этого было
        мало.
      </p>
      <p>
        Охватил жуткий мандраж. Чтобы справиться с этим, путешественник закинул в рот максимально допустимую дозу
        успокоительного.
      </p>
      <p>
        «Я такими темпами наркоманом стану», — подумал Егор с досадой. Но делать нечего. Ситуация экстремальная. Он
        старался не забывать об этом.
      </p>
    </PageWrapper>
  );
};