var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js',
      url: 'https://jp.vuejs.org/',
      toggle: true,
      languages: ['Python', 'JavaScript', 'Ruby']
    },
    methods: {
      onclick: function() {
        this.message = 'Clicked!'
      }
    }
  })