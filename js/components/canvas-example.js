class CanvasExample extends HTMLElement {
  constructor() {
    super();
    //initializations
  }
  connectedCallback() {
    const name = this.getAttribute("name")
    const canvasScript = this.innerHTML
    const canvasScriptWithGlobals = `
      const canvas = document.getElementById('${name}')
      const context = canvas.getContext('2d')
      ${canvasScript}
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