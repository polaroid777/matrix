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


class MyNewTestElement extends HTMLElement {
	constructor(){
		super();
		this.attachShadow({ mode: 'open'});

		this.shadowRoot.innerHTML = `
		<style>
			p{
				margin: 0;
				padding: 0.5rem 1rem;
				background-color:rgb(210, 236, 247);
				color:rgb(14, 28, 32);
				border-radius: 0.5rem;
				border-left: 4px solid #264653;
				box-shadow: 0px 4px 8px 0px rgb(26, 33, 36, 0.2);

				position: fixed;
				z-index: 50;
				bottom: 5px;
				left: 5px;
			}
		</style>

		<p>
			<slot>Hello USER!</slot>
		</p>
		`
	}
}

customElements.define('info-element', MyNewTestElement)