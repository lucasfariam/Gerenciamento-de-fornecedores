// import { Fornecedor } from './models/fornecedor';
// import { FormGroup } from '@angular/forms';
// import { FormBaseComponent } from '../base-components/form-base.component';
// import { ElementRef } from '@angular/core';
// import { Endereco } from './models/endereco';
// import { utilsBr } from 'js-brasil';


// export abstract class FornecedorBaseComponent extends FormBaseComponent {

//     errors: any[] = [];
//     errorsEndereco: any[] = [];
//     fornecedorForm: FormGroup;
//     enderecoForm: FormGroup;
  
//     fornecedor: Fornecedor = new Fornecedor();
//     endereco: Endereco = new Endereco();
  
//     textoDocumento: string = '';
  
//     MASKS = utilsBr.MASKS;
//     tipoFornecedor: number;
//     formResult: string = '';
    
//     constructor() {
//         super();

//         this.validationMessages = {
//           nome: {
//             required: 'Informe o Nome',
//           },
//           documento: {
//             required: 'Informe o Documento',
//             cpf: 'CPF em formato inválido',
//             cnpj: 'CNPJ em formato inválido'
//           },
//           logradouro: {
//             required: 'Informe o Logradouro',
//           },
//           numero: {
//             required: 'Informe o Número',
//           },
//           bairro: {
//             required: 'Informe o Bairro',
//           },
//           cep: {
//             required: 'Informe o CEP',
//             cep: 'CEP em formato inválido'
//           },
//           cidade: {
//             required: 'Informe a Cidade',
//           },
//           estado: {
//             required: 'Informe o Estado',
//           }
//         };
    
//          super.configurarMensagensValidacaoBase(this.validationMessages);
//       }
//       protected configurarValidacaoFormulario(formInputElements: ElementRef[] ) {
//         super.configurarValidacaoFormularioBase(formInputElements, this.fornecedorForm)
//        }
// }