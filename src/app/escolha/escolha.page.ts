import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {

  constructor(private navCtrl: NavController,
    private activateRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activateRouter.queryParams.
    subscribe(params=>{
      let aluno = JSON.parse(params["alunoSelecionado"]);

      console.log("O Aluno que chegou na pagina de escolha é: " + aluno.nome);
 
      
    })
    }
     voltar(){
      this.navCtrl.back();
}
}
