// Sub Menu Header Component
class SubMenuHeader extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });

    this.value = 'Sub Menu';

    this.render();
  }

  static get observedAttributes() {
    return ['value'];
  }

  /**
   * Handle attribute changes
   * @param {string} name Name of the property
   * @param {string} oldValue Old value of the property
   * @param {string} newValue New value of the property
   */
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
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

  /**
   * Render the component
   */
  render() {
    this.root.innerHTML = `
      <style>
        @import url(css/components/SubMenuHeader.css);
      </style>
      <div>
        <img src="assets/images/back.png" alt="Back button" height="40" width="40" onclick="showPage(pages.mainMenu)">
        <h1>${this.value}</h1>
      </div>
    `;
  }
}

customElements.define('sub-menu-header', SubMenuHeader);
