import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../shared/user.service';
import { getParamsId } from './get-params-id';
import { switchMap } from 'rxjs';

@Component({
  selector: 'lib-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {

  // Roteamento
  // Forma resumida de criar um construtor
  private userService = inject(UserService)

  // -> getParamsId is a observable
  user$ = getParamsId().pipe(
    // switchMap -> quando tenho um observable que eu quero passar para o outro
    switchMap(id => this.userService.getUserById(id)) // -> switch to getUserById that's a observable
  )

}
