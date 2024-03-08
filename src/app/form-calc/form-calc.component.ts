import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {

num1: number = 0;
num2: number = 0;
Calcular: number = 0;
selectedOperation!: string; // A variavel deve ser inicializada, porem o sinal "!" representa que sera definida posteriormente

onClickCalculate(){
  switch(this.selectedOperation){
    case 'Somar':
    this.Calcular = this.num1 + this.num2;
    break;
      case 'Dividir':
      this.Calcular = this.num1/this.num2;
      break;
        case 'Subtrair':
        this.Calcular = this.num1 - this.num2;
        break;
          case 'Multiplicar':
          this.Calcular = this.num1 * this.num2;
          break;
            case 'Potência':
            this.Calcular = Math.pow(this.num1,this.num2);
            break;
            default:
            this.Calcular = null;
            break;
    }
  
  }

}
