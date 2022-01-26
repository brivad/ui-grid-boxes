const defaultUI = {
  a: true,
  b: true,
  c: true,
  d: true,
  e: true,
  f: true,
  g: true,
  h: true,
  i: true,
  j: true,
  k: true,
  l: true,
  m: true,
}

let UI = localStorage.getItem('ui-grid-boxes')

if (UI) {
  UI = JSON.parse(UI)
} else {
  UI = defaultUI
}

renderMenu(UI)

function renderMenu(UI) {
  let menuHtml = ''

  Object.entries(UI).forEach(([key, isVisible]) => {
    const str = `<button onclick="toggleVisibility('${key}')" class=${
      isVisible ? 'visible-box' : 'invisible-box'
    }>${key}</button>`

    menuHtml += str

    isVisible ? showBox(key) : hideBox(key)
  })
  const menuEl = document.getElementById('menu')
  menuEl.innerHTML = menuHtml

  localStorage.setItem('ui-grid-boxes', JSON.stringify(UI))
}

function toggleVisibility(key) {
  UI[key] = !UI[key]
  const box = document.getElementById(key)
  renderMenu(UI)
  UI[key] === false
    ? (box.style.display = 'none')
    : (box.style.display = 'block')
}

function hideBox(key) {
  const box = document.getElementById(key)
  box.style.display = 'none'
}

function showBox(key) {
  const box = document.getElementById(key)
  box.style.display = 'block'
}

function closeHandler(elId) {
  const el = document.getElementById(elId)
  if (el.classList.contains('nascosto')) {
    el.classList.remove('nascosto')
  } else {
    el.classList.add('nascosto')
  }
}
