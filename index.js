'use strict';

const list = document.querySelector('ul.destinations-list');
const toggleListBtn = document.querySelector('#toggle-list');
const youSelectedP = document.querySelector('.you-selected');

toggleListBtn.addEventListener('click', () => {
    list.classList.toggle('hidden');
    list.classList.toggle('list-group');
    toggleListBtn.innerText = list.classList.contains('hidden') ? 'Show destinations' : 'Hide destinations';
});

list.addEventListener('click', click => {
    if (click.target.nodeName === 'LI') {
        for (const element of list.children) {
            element.classList.remove('bg-primary', 'text-light');
        }
        click.target.classList.add('bg-primary', 'text-light');
        youSelectedP.classList.remove('hidden');
        youSelectedP.innerText = 'You selected ' + click.target.innerText + '.';
    }
});