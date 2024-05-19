import { mockUsers } from './mocks/user.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { UserService } from './shared/user.service';
import { of } from 'rxjs';
import { provideRouter } from '@angular/router';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  function isValidISO8601(dateString: string) {
    // Expressão regular para validar o formato YYYY-MM-DD
    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    return regex.test(dateString);
  }

  function isValidEmail(email: string) {
    // Expressão regular para validar um e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersComponent],
      providers: [
        {
          provide: UserService,
          useValue: {
            getUsers: () => {
              return of(mockUsers); // of -> cria um observable para a compatibilidade do gerUsers atual.
            },
          },
        },
        provideRouter([]) // informar que está utilizando roteamento
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list users', () => {
    const users: HTMLElement[] = fixture.nativeElement.querySelectorAll('li');
    expect(users.length).toBe(mockUsers.length);

    // verificar se os nomes estão corretos
    for (let i = 0; i < users.length; i++) {
      expect(users[i].textContent).toContain(mockUsers[i].name);
    }

  })
  it('should validate ISO 8601 date format for all users', () => {
    for (const user of mockUsers) {
      expect(isValidISO8601(user.createdAt)).toBe(true);
    }
  });


  test('valid email address', () => {
    const users: HTMLElement[] = fixture.nativeElement.querySelectorAll('li');
     // verificar se os email estão corretos
    for (let i = 0; i < users.length; i++) {
      expect(users[i].textContent).toContain(mockUsers[i].email);
    }

    expect(isValidEmail(mockUsers[1].email)).toBe(true);
  });


  it('should validate email format for all users', () => {
    for (const user of mockUsers) {
      expect(isValidEmail(user.email)).toBe(true);
    }
  });

});
