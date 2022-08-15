class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timer = container.querySelector('.timer');
    
    this.timerId = null;
  
    this.registerEvents();
  }

  registerEvents() {
    document.addEventListener('keydown', (event) => {
      let currentSymbol = this.currentSymbol.textContent;
      let symbol = event.key;
      currentSymbol === symbol ? this.success() : this.fail();
    })
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      this.reset();
      alert('Вы победили!');
      this.countdown();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      this.reset();
      alert('Вы проиграли!');
      this.countdown();
    }
    this.setNewWord();
  }

  reset() {
    clearInterval(this.timerId)
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
    this.timer.textContent = word.length;
  }

  countdown() {
    this.timerId = setInterval(() => {
      let counter = this.timer.textContent;
      if (counter > 0) {
        counter--;
        this.timer.textContent = counter;
      } else {
        this.fail();
      }
    }, 1000)
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

const game = new Game(document.getElementById('game'));
game.setNewWord();
game.countdown();