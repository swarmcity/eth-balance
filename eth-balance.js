import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `eth-balance`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class EthBalance extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <eth-connect eth="{{eth}}"></eth-connect>
      <eth-contract abi="{{abi}}" contract-instance="{{contract}}"></eth-contract>
      [[balance]]
    `;
  }
  static get properties() {
    return {
      eth: {
        type: Object
      },
      abi: {
        type: Object
      },
      contractAddress: {
        type: String
      },
      address: {
        type: String
      },
      interval: {
        type: Number
      },
      contract: {
        type: Number
      },
      balance: {
        type: Number,
        notify: true,
        reflectToAttribute: true
      },
      error: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
    };
  }

  _getBaalance(abi, contractAddress, address){
    setInterval(() => { 
      contract.methods.balanceOf(address).call()
      .then((balance) => {
        this.balance = balance;
      })
      .catch((err) => {
        this.error = err
      })
    }, this.interval);
  }
} window.customElements.define('eth-balance', EthBalance);
