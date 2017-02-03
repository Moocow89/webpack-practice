var messages = require('./messages');

var newMessage = () => (`<p>${messages.hi} 222 ${messages.event}</p>`);

var app = document.getElementById('app');
app.innerHTML = newMessage();

if (module.hot) {
    module.hot.accept();
}
