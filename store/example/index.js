import { exampleVuexTypes } from './types';

export const state = () => ({
  example: [],
});

export const getters = {
  [exampleVuexTypes.GET_EXAMPLE]: (localState) => localState.example,
};

export const mutations = {
  [exampleVuexTypes.SET_EXAMPLE](localState, example) {
    localState.example = example;
  },
};

export const actions = {
  [exampleVuexTypes.FETCH_EXAMPLE]({ commit }, param) {
    commit(exampleVuexTypes.SET_EXAMPLE, param);
  },
};
