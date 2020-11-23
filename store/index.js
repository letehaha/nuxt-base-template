import { rootVuexTypes } from './types';

export const state = () => ({
  isTouchDevice: false,
});

export const getters = {
  [rootVuexTypes.IS_TOUCH_DEVICE]: state => state.isTouchDevice,
};

export const mutations = {
  [rootVuexTypes.SET_IS_TOUCH_DEVICE](state, value) {
    state.isTouchDevice = value;
  },
};

export const actions = {
};

export { rootVuexTypes } from './types';
