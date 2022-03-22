// Add current username to the hello text
const username = localStorage.getItem('username');
const helloText = document.getElementById('username');
helloText.innerText = username;

// Main Menu Item Component
class MainMenuItem extends HTMLElement {
  imgSrc = 'assets/images/hello.png';
  value = 'Button';

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['img-src', 'value'];
  }

  /**
   * Handle attribute changes
   * @param {string} name Name of the property
   * @param {string} oldValue Old value of the property
   * @param {string} newValue New value of the property
   */
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'img-src':
        this.imgSrc = newValue;
        break;
      case 'value':
        this.value = newValue;
        break;
      default:
        break;
    }

    /**
     * We need to re render the the component because translations
     * can update the fields after the component is rendered
     */
    this.render();
  }

  render() {
    this.root.innerHTML = `
      <style>
        @import url(css/components/MainMenuItem.css);
      </style>
      <div class="container">
        <img src="${this.imgSrc}" alt="${this.title}" height="96" width="96"  />
        <h2>${this.value}</h2>
      </div>
    `;
  }
}

customElements.define('main-menu-item', MainMenuItem);
