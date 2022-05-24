import { useDispatch } from 'react-redux';
import { ReactNode, useEffect } from 'react';

import { sideTextActions } from 'store/effects/sideText';
import { initialState } from 'store/effects/sideText/slice';

export type useSideTextProps = {
  isActiveDefault?: boolean;
  template: ReactNode;
  speed?: number;
};

export function useSideText({ isActiveDefault = true, template, speed = initialState.speed }: useSideTextProps) {
  const dispatch = useDispatch();

  const on = () => {
    dispatch(sideTextActions.setActiveState(true));
  };

  const off = () => {
    dispatch(sideTextActions.setActiveState(false));
  };

  useEffect(() => {
    dispatch(sideTextActions.setTemplate(template));
    dispatch(sideTextActions.setSpeed(speed));
    dispatch(sideTextActions.setActiveState(isActiveDefault));

    return () => {
      off();
    };
  }, []);

  return { sideTextOn: on, sideTextOff: off };
}
