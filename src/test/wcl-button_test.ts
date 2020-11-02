import {Button} from '../wcl-button.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('wcl-button', () => {
  test('is defined', () => {
    const el = document.createElement('wcl-button');
    assert.instanceOf(el, Button);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<wcl-button></wcl-button>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<wcl-button name="Test"></wcl-button>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<wcl-button></wcl-button>`)) as Button;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
