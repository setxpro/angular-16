import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './shared/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-users',
  standalone: true,
  imports: [CommonModule, RouterModule], // Importar o Router module diretamente no componente para que eu possa utilizar o <router-outlet/>
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {

  // $ -> mostrar que e um observable
  users$ = this.userService.getUsers();

  // Chamando o metodo de listagem de usuários
  constructor(private userService: UserService) {}

}
