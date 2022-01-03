function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode !== 13) return;
            this.relizaConta();
            this.display.focus();
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el)
            if (el.classList.contains('btn-clear')) this.clear(el)
            if (el.classList.contains('btn-del')) this.del(el)
            if (el.classList.contains('btn-eq')) this.relizaConta(el)
            this.display.focus();
        });
    };

    this.relizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida')
            return;
        }
    };

    this.addNumDisplay = el => this.display.value += el.innerText;

    this.clear = el => this.display.value = "";

    this.del = () => this.display.value = this.display.value.slice(0, -1);

}
//usa o meu molde /\ , e cria uma nova calculadora.
const calculadora = new Calculadora();
calculadora.inicia();