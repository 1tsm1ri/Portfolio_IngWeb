document.querySelector('button').addEventListener('mouseover', () => {
    document.querySelector('button').style.backgroundColor = 'rgb(107, 51, 66)';
    document.querySelector('button').style.transition = 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out';
    document.querySelector('button').style.transform = 'scale(1.1)'; // Increase scale for larger size
});

document.querySelector('button').addEventListener('mouseout', () => {
    document.querySelector('button').style.backgroundColor = 'rgba(113, 61, 76, 0.8)';
    document.querySelector('button').style.transform = 'scale(1)';
});
