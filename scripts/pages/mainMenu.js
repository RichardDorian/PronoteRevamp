// Add current username to the hello text
const username = localStorage.getItem('username');
const helloText = document.getElementById('username');
helloText.innerText = username;

// Main Menu Item Component
class MainMenuItem extends HTMLElement {
  imgSrc = 'assets/images/hello.png';
  text = 'Button';

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['img-src', 'text'];
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
      case 'text':
        this.text = newValue;
        break;
      default:
        break;
    }

    /**
     * No need to re render because the connectedCallback() method
     * is called after the attributes are set
     */
    // this.render();
  }

  render() {
    this.root.innerHTML = `
      <style>
        @import url(/css/pages/mainMenuItem.css);
      </style>
      <div class="container">
        <img src="${this.imgSrc}" alt="${this.title}" />
        <h2>${this.text}</h2>
      </div>
    `;
  }
}

customElements.define('main-menu-item', MainMenuItem);
