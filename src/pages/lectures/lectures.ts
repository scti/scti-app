import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-lectures',
  templateUrl: 'lectures.html',
})
export class LecturesPage {

  lectures = [
    {
      name: "Infra ágil em prol de uma Cultura DevOps",
      description: "Descrição em breve",
      tutor: "Alisson Menezes",
      schedule: "Segunda feira: 14h - 15h"  
    },
    {
      name: "Mesa Redonda: Como as organizações estudantis podem mudar o seu futuro profissional",
      description: "As empresas Juniores da UENF, Engloba e Soul Code, junto com a Enactus e a representante da Rio Junior em Campos, desejam levar até todos os congressistas um pouco mais sobre o mundo empreendedor. Esse é o momento de tirar todas as dúvidas que sempre teve sobre o movimento MEJ.",
      tutor: "MEJ/ENACTUS",
      schedule: "Segunda feira: 16h - 18h"
    },
    {
      name: "Mesa redonda: Por que é importante fomentar a participação da mulher no meio tecnológico?",
      description: "(Descrição em breve)",
      tutor: "",
      schedule: "Terça feira: 16h - 18h"
    },
    {
      name: "Mercado de aplicativos",
      description: "O objetivo da presente palestra é apresentar e discutir o mercado de aplicativos. Como iniciar um negócio, startups mais famosas e como surgiu o aplicativo Garçom.",
      tutor: "Raphael Gomes",
      schedule: "Quarta feira: 14h - 15h"
    },
    {
      name: "Impressão 3D",
      description: "Hardware, software e aplicações",
      tutor: "Luis Henrique Zeferino",
      schedule: "Quarta feira: 16h - 18h"
    },
    {
      name: "Redes Neurais: a terceira lei de Clarke",
      description: "Um breve tour pela história das redes neurais artificiais e o fenômeno atual conhecido como Deep Learning.",
      tutor: "Victor Villas",
      schedule: "Quinta feira: 14h - 15:30h"
    },
    {
      name: "Valves: Ferramentas para Validação e Verificação de Sistemas Embarcados",
      description: "(Descrição em breve)",
      tutor: "Rogerio Atem",
      schedule: "Quinta feira: 16h - 18h" 
    },
    {
      name: "I want to break free",
      description: "Descrição: Estamos na era da tecnologia, mas, é realmente sobre tecnologia tudo que estamos fazendo? Essa palestra vai te convidar a refletir sobre o fantástico mundo novo: a \"Era pós tecnologia\". O que está por vir? E como um profissional de TI pode se preparar para essa \"nova Era\"?",
      tutor: "Julyane Miranda",
      schedule: "Sexta feira: 14h - 15:30h"
    },
    {
      name: "O elo mais fraco da cybersegurança",
      description: "(Descrição em breve)",
      tutor: "Luiz Dias",
      schedule: "Sexta feira: 16h - 18h"
    }
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }


  
}
