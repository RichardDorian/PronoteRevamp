// Titled Separator Component
class TitledSeparator extends HTMLElement {
  value = 'Separator';
  /** Represents the `margin-top` and `margin-bottom` css values (space separated) */
  margin = '0 0';

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });

    this.render();
  }

  static get observedAttributes() {
    return ['value', 'margin'];
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
      case 'margin':
        this.margin = newValue;
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
        @import url(css/components/TitledSeparator.css);
      </style>
      <div style="margin-top: ${this.margin.split(' ')[0]}px; margin-bottom: ${
      this.margin.split(' ')[1]
    }px">
        <div></div>
        <h3>${this.value}</h3>
      </div>
    `;
  }
}

customElements.define('titled-separator', TitledSeparator);