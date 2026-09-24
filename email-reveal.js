'use strict';

const addressParts = [
    [106, 111, 110, 46, 102, 97, 108, 108, 115, 116, 114, 111, 109],
    [103, 109, 97, 105, 108, 46, 99, 111, 109]
];

function decode(part) {
    return String.fromCharCode(...part);
}

const address = `${decode(addressParts[0])}@${decode(addressParts[1])}`;

document.querySelectorAll('.email-reveal').forEach((button) => {
    button.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = `mailto:${address}`;
        link.textContent = address;
        button.replaceWith(link);
        link.focus();
    }, {once: true});
});
