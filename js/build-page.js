const fragments = [
  [
    'intro',
    'what-is-canvas',
    'this-is-canvas',
    'canvas-hard-to-see',
    'what-can-canvas-do'
  ],
  [
    '2D-examples',
    'context-api',
    'hello-canvas',
    'stroke-line',
    'stroke-square',
    'stroke-square-2',
    'stroke-circle',
    'fill-triangle',
    'fill-triangle-2',
    'fill-square',
    'fill-circle',
    'draw-image',
    'draw-image-2',
    'event-loop',
    'draw-image-webcam',
    'edit-imagedata',
    'drawing-program',
  ],
  [
    '3D-examples',
    'webgl-api',
    'webgl-draw-point',
    'webgl-initShaders',
    'three-js',
    'three-cube',
    'XR-examples',
    'a-frame',
    'a-frame-cube'
  ],
  [
    'canvas-vs-others',
    'canvas-accessibility',
    'questions',
    'thank-you'
  ]
]
const slides = document.querySelector('#slides')

fragments.forEach(section => {
  const sectionEl = document.createElement('section')

  section.forEach(fileName => {
    const subSectionEl = document.createElement('section')
    subSectionEl.id = fileName
    const fragmentLoader = document.createElement('html-fragment')
    fragmentLoader.setAttribute('src', `fragments/${fileName}.html`)

    subSectionEl.append(fragmentLoader)
    sectionEl.append(subSectionEl)
  })

  slides.append(sectionEl)
})