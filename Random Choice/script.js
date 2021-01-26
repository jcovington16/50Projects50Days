const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
  }
})

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())

  tagsEl.innerHTML = ''

  tags.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerHTML = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect() {
  const times = 30

  const interval = setInterval(() => {
    const randomTag = pickRandpmTag()

    highlighTag(randomTag)

    setTimeout(() => {
      unHighlighTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandpmTag()

      highlighTag(randomTag)
    }, 100)
  }, times * 100)
}

function pickRandpmTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floow(Math.random() * tags.length)]
}

function highlighTag(tag) {
  tag.classList.add('highlight')
}

function unHighlighTag(tag) {
  tag.classList.remove('highlight')
}
