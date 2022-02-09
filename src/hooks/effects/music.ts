import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { musicEffectsSelectors } from 'store/effects/music/reducer';
import { setMusic as setMusicEffect } from 'store/effects/music/actions';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';

type UseAudioProps = {
  src: string;
  fadeOutWhenUnload?: boolean;
};

export function useMusic({
  src,
  fadeOutWhenUnload = true,
}: UseAudioProps) {
  const dispatch = useDispatch();

  const [music, setMusic] = useState<HowlWrapper>();

  const musicInst = useSelector(musicEffectsSelectors.musicInst);

  useEffect(() => {
    const howlInst = new HowlWrapper({
      src: [src],
    });

    dispatch(setMusicEffect(howlInst));
  }, []);

  useEffect(() => {
    if (!musicInst || musicInst.isUnloading) {
      return;
    }

    setMusic(musicInst);

    return () => {
      musicInst.unload(fadeOutWhenUnload);
    };
  }, [musicInst]);

  return music;
}
