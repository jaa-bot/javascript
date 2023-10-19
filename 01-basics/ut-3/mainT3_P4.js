document.addEventListener('DOMContentLoaded', function() {

  const listGroupDiv = document.createElement('div');
  listGroupDiv.className = 'list-group';

  const listItems = [
    { class: 'list-group-item list-group-item-action', text: 'A simple default list group item' },
    { class: 'list-group-item list-group-item-action list-group-item-primary', text: 'A simple primary list group item' },
    { class: 'list-group-item list-group-item-action list-group-item-secondary', text: 'A simple secondary list group item' },
    { class: 'list-group-item list-group-item-action list-group-item-success', text: 'A simple success list group item' },
    { class: 'list-group-item list-group-item-action list-group-item-danger', text: 'A simple danger list group item' },
    { class: 'list-group-item list-group-item-action list-group-item-warning', text: 'A simple warning list group item' },
    { class: 'list-group-item list-group-item-action list-group-item-info', text: 'A simple info list group item' },
    { class: 'list-group-item list-group-item-action list-group-item-light', text: 'A simple light list group item' },
    { class: 'list-group-item list-group-item-action list-group-item-dark', text: 'A simple dark list group item' }
  ];

  // Agregar elementos <a> al div
  for (const itemData of listItems) {
    const listItem = document.createElement('a');
    listItem.href = '#';
    listItem.className = itemData.class;
    listItem.textContent = itemData.text;
    listGroupDiv.appendChild(listItem);
  }

  // Agregar el div al body del documento
  document.body.appendChild(listGroupDiv);
});
