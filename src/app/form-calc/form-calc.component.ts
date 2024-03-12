import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {

num1: number = 0;
num2: number = 0;
resultado: number = 0;
selectedOperation!: string; // A variavel deve ser inicializada, porem o sinal "!" representa que sera definida posteriormente
mostrarImagem: boolean = false;

constructor(private el: ElementRef, private renderer: Renderer2) {}

// Alterando a função para mudar a lógica do calculo de acordo com a opção de operação selecionada

onClickCalculate(){
  switch(this.selectedOperation){
    case 'Somar':
    this.resultado = this.num1 + this.num2;
    break;
      case 'Dividir':
      this.resultado = this.num1/this.num2;
      break;
        case 'Subtrair':
        this.resultado = this.num1 - this.num2;
        break;
          case 'Multiplicar':
          this.resultado = this.num1 * this.num2;
          break;
            case 'Potência':
            this.resultado = Math.pow(this.num1,this.num2);
            break;
            case 'RaizQuadrada':
            this.resultado = Math.sqrt(this.num1);
            break;
            default:
              this.resultado = 0;
            
    }

    this.mostrarImagem = true;

    //exibir imagem por 3 segundos
    setTimeout(() => {
this.mostrarImagem =false;

    },3000);

    this.scrollToImage();
  
  }
  private  scrollToImage(){

const imgElement = this.el.nativeElement.querySelector('img');
if(imgElement){

imgElement.scrollIntoView({behavior:'smooth', block:'start'});

}

  }

}
