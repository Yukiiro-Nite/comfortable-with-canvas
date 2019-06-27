const fragments = [
  'stroke-line',
  'stroke-square',
  'stroke-square-2',
  'stroke-circle',
  'fill-triangle',
  'fill-triangle-2',
  'fill-square',
  'fill-square-2',
  'fill-circle',
  'fill-circle-2',
  'draw-image',
  'draw-image-2',
  'event-loop',
  'draw-image-webcam',
  'edit-imagedata',
]
const previewSection = document.querySelector('#preview')

fragments.forEach(fileName => {
  const section = document.createElement('section')
  const fragmentLoader = document.createElement('html-fragment')
  fragmentLoader.setAttribute('src', `fragments/${fileName}.html`)

  section.append(fragmentLoader)
  previewSection.append(section)
})