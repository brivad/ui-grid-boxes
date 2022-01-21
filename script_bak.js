const UI = {
  div1: true,
  div2: true,
  div3: true,
  div4: true,
  div5: true,
  div6: true,
  div7: true,
  div8: true,
};

function renderMenu() {
  let menuHtml = '';

  Object.entries(UI).forEach(([key, isVisible]) => {
    const str = `<button onclick="toggleVisibility('${key}')" class=${
      isVisible ? 'visible' : 'hidden'
    }>${key}</button>`;

    menuHtml += str;

    isVisible ? showBox(key) : hideBox(key);
  });
  const menuEl = document.getElementById('menu');
  menuEl.innerHTML = menuHtml;
}

renderMenu();

function toggleVisibility(key) {
  UI[key] = !UI[key];
  const box = document.getElementById(key);
  renderMenu();
  UI[key] === false
    ? (box.style.display = 'none')
    : (box.style.display = 'block');
}

function hideBox(key) {
  const box = document.getElementById(key);
  box.style.display = 'none';
}

function showBox(key) {
  const box = document.getElementById(key);
  box.style.display = 'block';
}

function closeHandler(elId) {
  const el = document.getElementById(elId);
  if (el.classList.contains('nascosto')) {
    //
    el.classList.remove('nascosto');
  } else {
    el.classList.add('nascosto');
  }
}
