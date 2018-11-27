Vue.filter('toUSD', function(jpy) {
  return jpy / 100
})

Vue.filter('numberFormat', function(value) {
  return value.toLocaleString();
})

Vue.filter('readMore', function(text, length, suffix) {
  return text.substring(0, length) + suffix;
})

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js',
      message_html: 'Hello <span style="color:red;">Vue.js</span>',
      number: 100000000,
      ok: false,
      jpyPrice: 298000,
      text: 'Project tracking, teamwork & client reporting like you have never seen before.'
    },
    methods: {
      onclick: function() {
        this.message = 'Clicked!'
      }
    // },
    // local filters
    // filters: {
    //   numberFormat: function(value) {
    //     return value.toLocaleString();
    //   }
    }
  })