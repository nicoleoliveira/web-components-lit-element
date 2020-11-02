import { LitElement, html, customElement, property, internalProperty } from 'lit-element';

import { buttonStyles } from './wcl-button.style';
import { themeDefault } from './wcl-theme-variables.style';

@customElement('wcl-button')
export class Button extends LitElement {
  static get styles() {
    return [
      themeDefault,
      buttonStyles
    ]
  } 

  @property()
  type = 'default';

  @property({type: Boolean})
  disabled = false;

  @property()
  label = '';

  @internalProperty()
  click: any;

  connectedCallback() {
    super.connectedCallback();

    this.click = document.createEvent('Event');
    this.click.initEvent('clickButton', true, true);
  }

  render() {
    return html`
      <button
          @click=${this.onClick}
          class=${this.getClass()}
          wcl-disabled="${this.disabled}">
          ${this.label}
      </button>
    `;
  }

  private onClick() {
    this.dispatchEvent(this.click);
  }

  private getClass() {
    return `${this.type} ${this.disabled ? 'disabled': ''}`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wcl-button': Button;
  }
}
