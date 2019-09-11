import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'uDo-DataStorage',
  storage: window.localStorage
});


export default new Vuex.Store({
  state: {
    tabs: [
      {
        id: 0,
        title: "Main",
        todoItems: []
      }
    ],
    activeTab: 0,
  },
  getters: {
    sortedToDoList: state => {
      return state.tabs[state.activeTab].todoItems.sort((a, b) => a.checked - b.checked);
    }
  },
  mutations: {
    addTab(state) {
      state.tabs.push({id: state.tabs.length + 1, title: String(state.tabs.length), todoItems: []});
      state.activeTab = state.tabs.length - 1;
    },
    swapTab(state, index) {
      state.activeTab = index;
    },
    deleteTab(state, index) {
      if (index !== 0) {
        state.tabs.splice(index, 1);
        state.activeTab = 0;
      }
    },
    addTask(state, value) {
      let newIndex = state.tabs[state.activeTab].todoItems
        .length > 0 ? (Math.max(...state.tabs[state.activeTab].todoItems
        .map(e => e.id)) + 1) : 0;
      state.tabs[state.activeTab].todoItems.unshift({txt: value, id: newIndex, checked: false});
    },
    delTask(state, item) {
      const findItem = state.tabs[state.activeTab].todoItems.findIndex(i => i.id === item.id);
      state.tabs[state.activeTab].todoItems.splice(findItem, 1);
    },
    updateTask(state, item) {
      const foundItem = state.tabs[state.activeTab].todoItems.find(i => i.id === item.id);
      foundItem.txt = item.txt;
      state.tabs[state.activeTab].todoItems.sort((a, b) => a.checked - b.checked);
    },
    completeTask(state, data) {
      const foundItem = state.tabs[state.activeTab].todoItems.find(i => i.id === data.item.id);
      foundItem.checked = data.value;
      state.tabs[state.activeTab].todoItems.sort((a, b) => a.checked - b.checked);
    },
    sortable(state, newList) {
      state.tabs[state.activeTab].todoItems = newList
    },
    sortTasksList(state) {
      state.tabs[state.activeTab].todoItems.sort((a, b) => a.checked - b.checked);
    }
  },
  actions: {
    addTab(state) {
      state.commit("addTab");
    },
    swapTab(state, index) {
      state.commit("swapTab", index);
    },
    deleteTab(state, index) {
      state.commit("deleteTab", index);
    },
    addTask(state, value) {
      state.commit("addTask", value);
    },
    delTask(state, item) {
      state.commit("delTask", item);
    },
    updateTask(state, item) {
      state.commit("updateTask", item);
    },
    completeTask(state, data) {
      state.commit("completeTask", data);
    },
    sortable(state, newList) {
      state.commit("sortable", newList);
    },
    sortTasksList(state) {
      state.commit("sortTasksList");
    }

  },
  plugins: [vuexPersist.plugin]
})