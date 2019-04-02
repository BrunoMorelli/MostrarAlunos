import { Component, OnInit } from "@angular/core";
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { AlunosService } from '../providers/alunos.service';
import { Aluno } from "../modelos/Alunos";
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  public alunos: Aluno[];

  constructor(private Loading: LoadingController,
              private alert: AlertController,
              private alunosService: AlunosService,
              private navCrtl: NavController) {}

  async ngOnInit() {
    const loading = await this.Loading.create(
      {
        message: 'Aguarde o carregamento dos alunos...'
      });
      await loading.present();

      this.alunosService.listar().subscribe(alunos => {
        this.alunos = alunos;
      }, async (err: HttpErrorResponse) => {
        console.log('Deu erro ´-´' + err.status)
        const al = await this.alert.create({
          header: 'Erro!',
          message: 'Erro ao listar alunos',
          buttons: [{text: 'OK'}]
        });

        await al.present()
      }).add(
        () => {
          loading.dismiss();
        });

        
  }
  selecionaAluno(aluno: Aluno){
    console.log("Aluno selecionado: " + aluno.nome);
    
    let extras : NavigationExtras = {
      queryParams:{
        alunoSelecionado: JSON.stringify(aluno)
      }
    }
    this.navCrtl.navigateForward(['escolha'], extras);
  }
}
