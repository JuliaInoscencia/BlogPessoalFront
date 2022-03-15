import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  user: Usuario = new Usuario();
  confirmSenha: string;
  tipoUser: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }
  confirmaSenha(event: any) {
    this.confirmSenha = event.target.value;
  }
  tipoUsuario(event: any) {
    this.tipoUser = event.target.value;
  }
  cadastrar() {
    this.user.tipo = this.tipoUser;

    if (this.user.senha != this.confirmSenha) {
      alert('As senhas divergem!');
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {
        this.user = resp
        this.router.navigate(["/entrar"])
        alert('Usuário cadastrado com sucesso!');
      });
    }
  }
}
