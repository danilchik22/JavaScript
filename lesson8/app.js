'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

// @ts-ignore
fitlerLabel.addEventListener('click', function() {
    // @ts-ignore
    fitlerPopup.classList.toggle('hidden');
    // @ts-ignore
    fitlerLabel.classList.toggle('filterLabelPink');
    // @ts-ignore
    filterIcon.classList.toggle('filterIconPink');

    // @ts-ignore
    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        // @ts-ignore
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        // @ts-ignore
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        // @ts-ignore
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
// @ts-ignore
filterSizeWrap.addEventListener('click', function() {
    // @ts-ignore
    filterSizes.classList.toggle('hidden');
});