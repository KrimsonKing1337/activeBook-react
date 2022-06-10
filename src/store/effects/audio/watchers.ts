import { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeLatest } from 'redux-saga/effects';

import { mainActions, mainSelectors } from 'store/main';
import { AudioInstancesIsLoaded } from 'store/main/@types';
import { setAudioInstancesIsLoaded } from 'store/main/actions';

import { HowlInst, LastInstIndex } from './@types';
import { actions } from './slice';
import { selectors } from './selectors';

export function* watchSetAudio(action: PayloadAction<HowlInst>) {
  const { payload } = action;

  const audioInstancesIsLoaded: AudioInstancesIsLoaded = yield select(mainSelectors.audioInstancesIsLoaded);

  yield put(mainActions.setAudioInstancesIsLoaded({
    ...audioInstancesIsLoaded,
    audio: false,
  }));

  const lastInstIndex: LastInstIndex = yield select(selectors.lastInstIndex);

  if (lastInstIndex === 1) {
    yield put(actions.setHowlInst2(payload));
    yield put(actions.setHowlInst1(null));
    yield put(actions.setLastInstIndex(2));
  } else {
    yield put(actions.setHowlInst1(payload));
    yield put(actions.setHowlInst2(null));
    yield put(actions.setLastInstIndex(1));
  }

  if (!payload) {
    const newValue = { ...audioInstancesIsLoaded };

    delete newValue.audio;

    setAudioInstancesIsLoaded({ ...newValue });

    return;
  }

  const state = payload?.state();

  if (state === 'loaded') {
    setAudioInstancesIsLoaded({
      ...audioInstancesIsLoaded,
      audio: true,
    });
  } else {
    payload?.howlInst.on('load', () => {
      setAudioInstancesIsLoaded({
        ...audioInstancesIsLoaded,
        audio: true,
      });
    });
  }
}

export function* watchActions() {
  yield takeLatest(actions.setAudio, watchSetAudio);
}
