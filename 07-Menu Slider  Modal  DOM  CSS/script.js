const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const model = document.getElementById('model');

//toggle
toggle.addEventListener('click', 
() => document.body.classList.toggle('show-nav'));

//Open model
open.addEventListener('click', () => model.classList.add('show-model'))
//close model
close.addEventListener('click', () => model.classList.remove('show-model'))
