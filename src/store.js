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
    version: 'BETA',
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
        {
          themeName: 'White',
        },
        {
          themeName: 'Dark',
        }
      ]
    },
    popups: {
      isPopupShow: false,
      popupType: ""
    },
    snackbars: {
      isSnackbarShow: false,
      snackbarText: ""
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
    swapTab(state, tabID) {
      state.tabs.activeTab = tabID;
    },
    newTabList(state, newTabList) {
      state.tabs.activeTab = 0;
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
      state.tabs.tabsList[state.tabs.activeTab].todoItems = newList;
      state.tabs.tabsList[state.tabs.activeTab].todoItems.sort((a, b) => a.checked - b.checked);
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
      state.tabs.tabsList[index].todoItems = state.tabs.tabsList[index].todoItems.filter(item => item.checked === false)
    },
    deleteAll(state, index) {
      state.tabs.tabsList[index].todoItems = []
    },
    closeSnackbar(state) {
      state.snackbars.isSnackbarShow = false;
    },
    openSnackbar(state, text) {
      state.snackbars.snackbarText = text;
      state.snackbars.isSnackbarShow = true;
      setTimeout(() => {
        state.snackbars.isSnackbarShow = false;
      }, 1000);
    },
    uploadImg(state, data) {
      const foundedItem = state.tabs.tabsList[state.tabs.activeTab].todoItems.find(i => i.id === data.id);
      foundedItem.img = data.img;
    },
    deleteImg(state, data) {
      const foundedItem = state.tabs.tabsList[state.tabs.activeTab].todoItems.find(i => i.id === data.id);
      foundedItem.img = '';
    },
    moveItem(state, data) {
      //Delete current item:
      state.tabs.tabsList[state.tabs.activeTab].todoItems.splice(data.itemIndex, 1);
      //find chosen tab in tab list in state:
      const chosenTab = state.tabs.tabsList.find(i => i.id === data.tab.id);
      //push current item in list of founded tab:
      chosenTab.todoItems.unshift(data.item)
    },
    refreshApp() {
      location.reload();
    }
  },
  actions: {
    addTab(state) {
      state.commit("addTab");
    },
    swapTab(state, tabID) {
      state.commit("swapTab", tabID);
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
    deleteCompleted(state, index) {
      state.commit("deleteCompleted", index);
    },
    deleteAll(state, index) {
      state.commit("deleteAll", index);
    },
    closeSnackbar(state) {
      state.commit("closeSnackbar");
    },
    openSnackbar(state, text) {
      state.commit("openSnackbar", text);
    },
    clearData() {
      localStorage.clear();
      location.reload();
    },
    uploadImg(state, data) {
      state.commit("uploadImg", data);
    },
    deleteImg(state, item) {
      state.commit("deleteImg", item);
    },
    moveItem(state, data) {
      state.commit("moveItem", data);
    },
    refreshApp(state) {
      state.commit("refreshApp");
    }
  },
  plugins: [vuexPersist.plugin]
})
