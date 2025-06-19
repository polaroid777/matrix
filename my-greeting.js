class MyGreeting extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: 'open' });
		shadow.innerHTML = `
      <style>
        p {
          color: var(--text-color, black);
          font-size: 18px;
          border-left: 4px solid #264653;
          padding: 10px;
          border-radius: 6px;
          background-color: #e9f5f2;
        }

        span {
          font-weight: bold;
        }
      </style>
      <p>Hello, <span><slot>Guest</slot></span>!</p>
    `;
	}
}

customElements.define('my-greeting', MyGreeting);
