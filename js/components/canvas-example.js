class CanvasExample extends HTMLElement {
  constructor() {
    super();
    //initializations
  }

  htmlDecode(code) {
    const replacements = [
      ['&lt;', '<'],
      ['&gt;', '>']
    ]

    return replacements.reduce((str, [pattern, replacement]) => {
      return str.split(pattern).join(replacement)
    }, code)
  }

  connectedCallback() {
    const name = this.getAttribute("name")
    const canvasScript = this.innerHTML
    const canvasScriptWithGlobals = `
      const canvas = document.getElementById('${name}')
      const context = canvas.getContext('2d')

      context.strokeStyle = '#000000'
      context.lineWidth = 8
      context.lineCap = "round"
      context.lineJoin = "round"

      context.fillStyle = '#444444'

      ${this.htmlDecode(canvasScript)}
    `

    this.innerHTML = `
      <h2>${name}</h2>
      <canvas id="${name}" class="with-grid"></canvas>
      <pre>
        <code class="js" data-trim>
          ${canvasScript}
        </code>
      </pre>
    `

    eval(canvasScriptWithGlobals)
  }
  attributeChangeCallback() { }
  disconnectedCallback() { }
}
customElements.define('canvas-example', CanvasExample);