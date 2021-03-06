import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { backgroundImgEffectActions } from 'store/effects/background/img';

import { Toggle } from 'components/Toggle';

export const Img = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(backgroundImgEffectActions.setSrc('/assets/img/cinemagraph.gif'));
  }, []);

  const buttonClickHandler = (value: boolean) => {
    dispatch(backgroundImgEffectActions.setActiveState(value));
  };

  return (
    <Toggle
      label="Изображение на заднем фоне"
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
