import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pergunta: string;
  resposta: string;
  animacao: boolean = false;
  animacao1: boolean = false;
  mostrar: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.solicitarCharada();
  }

  solicitarCharada(){
    this.animacao =  false;
    const url = "http://lucasreno.kinghost.net/charada";
    this.http.get(url).subscribe( frase => {
      this.pergunta = frase[0].pergunta;
      this.resposta = frase[0].resposta;
      this.animacao = true;
      this.mostrar = false;
    });
  }

  mostrarResposta(){
    this.animacao1 = true;
    this.mostrar = true;
  }
}
