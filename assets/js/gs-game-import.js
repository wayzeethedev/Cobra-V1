fetch('/assets/json/games.json')
  .then(response => response.json())
  .then(data => {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';

    data.forEach(item => {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');

      const img = document.createElement('img');
      img.src = item.image;

      const p = document.createElement('p');
      p.textContent = item.title;

      gridItem.addEventListener('click', () => {
        window.location.href = `/preview.html?id=${item.id}`;
      });

      gridItem.appendChild(img);
      gridItem.appendChild(p);
      gridContainer.appendChild(gridItem);
    });
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });
