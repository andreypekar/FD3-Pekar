"use strict";

function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Ваш адрес e-mail'},
      {'id': 'name', 'help': 'Ваше полное имя'},
      {'id': 'age', 'help': 'Ваш возраст (Вам должно быть больше 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i]; //var item - будет работать неправильно, всегда последний элемент хэша про возраст будет отображаться
    document.getElementById(item.id).onfocus = function() {
        showHelp(item.help);
    }
  }
}

setupHelp();