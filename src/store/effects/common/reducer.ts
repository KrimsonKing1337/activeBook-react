import { actionsTypes, EffectsActions } from './actions';
import { EffectsState, initialState } from './initialState';

export function effectsReducer(state = initialState, action: EffectsActions): EffectsState {
  switch (action.type) {
  case actionsTypes.SET_SIDE_SHADOW_ACTIVE_STATE:
    return {
      ...state,
      sideShadowIsActive: action.payload,
    };
  case actionsTypes.SET_SIDE_TEXT_ACTIVE_STATE:
    return {
      ...state,
      sideTextIsActive: action.payload,
    };
  case actionsTypes.SET_BACKGROUND_VIDEO_ACTIVE_STATE:
    return {
      ...state,
      backgroundVideoIsActive: action.payload,
    };
  case actionsTypes.SET_BACKGROUND_IMG_ACTIVE_STATE:
    return {
      ...state,
      backgroundImgIsActive: action.payload,
    };
  case actionsTypes.SET_INVERSE_COLOR_ACTIVE_STATE:
    return {
      ...state,
      inverseColorIsActive: action.payload,
    };
  case actionsTypes.SET_DOTS_ACTIVE_STATE:
    return {
      ...state,
      dotsIsActive: action.payload,
    };
  default:
    return state;
  }
}
