// Timetable Item Component
class TimetableItem extends HTMLElement {
  startingTime = '00:00 AM';
  color = '#84a2d4';
  subject = 'Subject';
  room = '100';
  isSpecial = false;

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });

    this.render();
  }

  static get observedAttributes() {
    return ['starting-time', 'color', 'subject', 'room', 'special'];
  }

  /**
   * Handle attribute changes
   * @param {string} name Name of the property
   * @param {string} oldValue Old value of the property
   * @param {string} newValue New value of the property
   */
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'starting-time':
        this.startingTime = newValue;
        break;
      case 'color':
        this.color = newValue;
        break;
      case 'subject':
        this.subject = newValue;
        break;
      case 'room':
        this.room = newValue;
        break;
      case 'special':
        this.isSpecial = newValue === 'true';
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
    const specialCssText = this.isSpecial
      ? `style="color: ${this.color}"`
      : 'style="color: var(--color-background)"';
    const specialCssDiv = this.isSpecial
      ? `style="background-color: var(--color-background); border: 2px solid ${this.color}; width: 79%;"`
      : `style="background-color: ${this.color};"`;
    this.root.innerHTML = `
      <style>
        @import url(css/components/TimetableItem.css);
      </style>
      <div id="container">
        <h1>${this.startingTime.replace(' ', '<br>')}</h1>
        <div ${specialCssDiv}>
          <h2 ${specialCssText}>${this.subject}</h2>
          <h3 ${specialCssText}>${this.room}</h3>
        </div>
      </div>
    `;
  }
}

customElements.define('timetable-item', TimetableItem);
