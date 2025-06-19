import './my-greeting.js';

class CounterElement extends HTMLElement {
	constructor() {
		super();
		this.count = 0;
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
      <button>Click me</button>
      <span>Count: 0</span>
    `;

		this.shadowRoot.querySelector('button').addEventListener('click', () => {
			this.count++;
			this.shadowRoot.querySelector('span').textContent = `Count: ${this.count}`;
		});
	}
}

customElements.define('my-counter', CounterElement);
