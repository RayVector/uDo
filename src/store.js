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
    version: 'alpha',
    tabs: {
      tabsList: [
        {
          id: 0,
          title: "Main",
          todoItems: []
        }
      ],
      activeTab: 0,
    },
    themes: {
      activeTheme: 0,
      themesList: [
        {
          themeName: 'Forest',
        },
        {
          themeName: 'Space',
        },
        {
          themeName: 'Sea',
        },
      ]
    },
    popups: {
      isPopupShow: false,
      popupType: ""
    },
  },
  getters: {
    sortedToDoList: state => {
      return state.tabs.tabsList[state.tabs.activeTab].todoItems.sort((a, b) => a.checked - b.checked);
    }
  },
  mutations: {
    addTab(state) {
      let newId = state.tabs.tabsList
        .length > 0 ? (Math.max(...state.tabs.tabsList
        .map(e => e.id)) + 1) : 0;
      state.tabs.tabsList.push({id: newId, title: String(state.tabs.tabsList.length + 1), todoItems: []});
      state.tabs.activeTab = state.tabs.tabsList.length - 1;
    },
    swapTab(state, index) {
      state.tabs.activeTab = index;
    },
    newTabList(state, newTabList) {
      state.tabs.tabsList = newTabList
    },
    deleteTab(state, index) {
      state.tabs.tabsList.splice(index, 1);
    },
    addTask(state, value) {
      let newIndex = state.tabs.tabsList[state.tabs.activeTab].todoItems
        .length > 0 ? (Math.max(...state.tabs.tabsList[state.tabs.activeTab].todoItems
        .map(e => e.id)) + 1) : 0;
      state.tabs.tabsList[state.tabs.activeTab].todoItems.unshift({
        txt: value,
        id: newIndex,
        checked: false,
        desc: '',
        img: ''
      });
    },
    delTask(state, item) {
      const findItem = state.tabs.tabsList[state.tabs.activeTab].todoItems.findIndex(i => i.id === item.id);
      state.tabs.tabsList[state.tabs.activeTab].todoItems.splice(findItem, 1);
    },
    updateTask(state, item) {
      const foundItem = state.tabs.tabsList[state.tabs.activeTab].todoItems.find(i => i.id === item.id);
      foundItem.txt = item.txt;
      foundItem.desc = item.desc;
      foundItem.img = item.img;
      state.tabs.tabsList[state.tabs.activeTab].todoItems.sort((a, b) => a.checked - b.checked);
    },
    updateTaskName(state, item) {
      const foundItem = state.tabs.tabsList[state.tabs.activeTab].todoItems.find(i => i.id === item.id);
      foundItem.txt = item.txt;
    },
    updateTaskDesc(state, item) {
      const foundItem = state.tabs.tabsList[state.tabs.activeTab].todoItems.find(i => i.id === item.id);
      foundItem.desc = item.desc;
    },
    updateTaskImg(state, item) {
      const foundItem = state.tabs.tabsList[state.tabs.activeTab].todoItems.find(i => i.id === item.id);
      foundItem.img = item.img;
    },
    updateStatusTask(state, data) {
      const foundItem = state.tabs.tabsList[state.tabs.activeTab].todoItems.find(i => i.id === data.item.id);
      foundItem.checked = data.value;
      state.tabs.tabsList[state.tabs.activeTab].todoItems.sort((a, b) => a.checked - b.checked);
    },
    sortable(state, newList) {
      state.tabs.tabsList[state.tabs.activeTab].todoItems = newList
    },
    updateTab(state, item) {
      const foundItem = state.tabs.tabsList.find(i => i.id === item.id);
      foundItem.title = item.title;
    },
    closePopup(state) {
      state.popups.isPopupShow = false;
    },
    openPopup(state, popupType) {
      state.popups.isPopupShow = true;
      state.popups.popupType = popupType;
    },
    chooseTheme(state, index) {
      state.themes.activeTheme = index;
    },
    deleteCompleted(state, index) {
      state.tabs.tabsList[index].todoItems = state.tabs.tabsList[index].todoItems.filter( item => item.checked === false)
    },
    deleteAll(state, index) {
      state.tabs.tabsList[index].todoItems = []
    },
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
    newTabList(state, newTabList) {
      state.commit("newTabList", newTabList);
    },
    addTask(state, value) {
      state.commit("addTask", value);
    },
    delTask(state, item) {
      state.commit("delTask", item);
    },
    updateTaskName(state, item) {
      state.commit("updateTaskName", item);
    },
    updateTaskDesc(state, item) {
      state.commit("updateTaskDesc", item);
    },
    updateTaskImg(state, item) {
      state.commit("updateTaskImg", item);
    },
    changeTaskStatus(state, data) {
      state.commit("changeTaskStatus", data);
    },
    updateStatusTask(state, data) {
      state.commit("updateStatusTask", data);
    },
    sortable(state, newList) {
      state.commit("sortable", newList);
    },
    updateTab(state, item) {
      state.commit("updateTab", item);
    },
    closePopup(state) {
      state.commit("closePopup");
    },
    openPopup(state, popupType) {
      state.commit("openPopup", popupType);
    },
    chooseTheme(state, index) {
      state.commit("chooseTheme", index);
    },
    deleteCompleted (state, index) {
       state.commit("deleteCompleted", index);
    },
    deleteAll (state, index) {
       state.commit("deleteAll", index);
    },
  },
  plugins: [vuexPersist.plugin]
})