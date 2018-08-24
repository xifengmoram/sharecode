// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tasks: [],
    newTask: '',
    key: 0
  },

  changeTaskStatus: function(e) {
    let value = e.currentTarget.dataset.value;

    let tasks = this.data.tasks;

    let index = tasks.findIndex(task => task.value == value);

    if (index < 0) {
      return;
    }

    tasks[index].status = !tasks[index].status;

    this.setData({
      tasks: tasks
    });
  },

  removeTask: function(e) {
    let value = e.currentTarget.dataset.value;

    let tasks = this.data.tasks;

    let newTasks = tasks.filter(task => task.value != value);

    this.setData({
      tasks: newTasks
    });
  },

  typeNewTask: function(e) {
    this.setData({
      newTask: e.detail.value.trim()
    });
  },

  addTask: function() {
    let tasks = this.data.tasks;

    let key = this.data.key;

    let newTaskObj = {content: this.data.newTask, value: key++, status: false};

    tasks.push(newTaskObj);

    this.setData({
      tasks: tasks,
      key: key,
      newTask: ''
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})