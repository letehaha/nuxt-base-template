import { exampleVuexTypes } from './types';

export const state = () => ({
  example: [],
});

export const getters = {
  [exampleVuexTypes.GET_EXAMPLE]: (state, getters) => state.example,
}

export const mutations = {
  [exampleVuexTypes.SET_EXAMPLE](state, example) {
    state.example = example;
  },
}

export const actions = {
  [exampleVuexTypes.FETCH_EXAMPLE]({ state, commit }, param) {
    commit(exampleVuexTypes.SET_EXAMPLE, param)
  },
}
