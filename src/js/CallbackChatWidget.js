export default class CallbackChatWidget {
    constructor(container) {
      this.container = container;
    }
  
    init() {
      this.bindToDOM();
      this.initElements();
      this.registerListeners();
    }
  
    // eslint-disable-next-line class-methods-use-this
    createMarkup() {
      return `      
        <div class="callback">
          <div class="callback-form">
            <label for="callback-area" class="callback-lbl">Напишите нам</label>
            <textarea id="callback-area" class="callback-area"></textarea>
            <button class="callback-btn">Отправить сообщение</button>
            <div class="callback-del">x</div> 
          </div>
          <div class="callback-point chat-hidden"></div>
        </div>
      `;
    }
  
    bindToDOM() {
      this.container.insertAdjacentHTML('beforeend', this.createMarkup());
    }
  
    initElements() {
      this.delEl = document.querySelector('.callback-del');
      this.pointEl = document.querySelector('.callback-point');
    }
  
    registerListeners() {
      this.delEl.addEventListener('click', (event) => this.onClick(event));
      this.pointEl.addEventListener('click', (event) => this.onClick(event));
    }
  
    onClick(event) {
      this.delEl.closest('.callback-form').classList.toggle('chat-hidden');
      this.pointEl.classList.toggle('chat-hidden');
      event.target.removeEventListener('click', () => this.onClick(event));
    }
  }
  