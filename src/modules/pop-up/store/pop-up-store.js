export default {
  namespaced: true,
  state: {
    name: '',
    attentionParagraphs: [],
  },
  mutations: {
    close(state) {
      state.name = ''
    },
    setAttention(state, paragraphs) {
      state.attentionParagraphs = paragraphs
      state.name = 'AttentionPopUp'
    },
  },
  getters: {
    shown: state => Boolean(state.name),
  },
}
