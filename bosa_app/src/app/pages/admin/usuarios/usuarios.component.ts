import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, OnDestroy  {

  usuarios: any = []
  private destroy$ = new Subject<any>();

  constructor(
    //private dialog: MatDialog,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router:Router, 
    private activeRoute:ActivatedRoute,
    ) { }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  ngOnInit(){
    this.userService.getUsuarioList().subscribe(
      res => {
        this.usuarios = res;
      },
      err => console.log(err)
    );
  }

  onDelete(idUsuario: number) {
    Swal.fire({
      title: '',
      text: `¿Realmente desea eliminar el registro?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'darkBlue',
      cancelButtonColor: 'darkRed',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then( (result) => {
      if (result.isConfirmed) {
        this.userService.deleteUsuario(idUsuario)
          .pipe(takeUntil(this.destroy$))
          .subscribe( (result: any) => {
            if (result) {
              this.snackBar.open(result.message, '', {
                duration: 5 * 1000,
                panelClass: [ result.code == 0 ? 'success-snackbar' : 'error-snackbar'],
                horizontalPosition: 'right',
                verticalPosition: 'top'
              })

              this.userService.getUsuarioList().subscribe(
                res => {
                  this.usuarios = res;
                },
                err => console.log(err)
              );
            }
          });
      }
    })
  }

/*   onOpenModal(usuario = {}) {
    console.log(usuario);
    const dialogRef = this.dialog.open(UsuariosEditComponent, {
      minWidth: '60%',
      data: {
        title: 'Administacion de Usuarios',
        usuario
      }
    });
  
   dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.snackBar.open(result.message, '', {
            duration: 5 * 1000,
            panelClass: [ result.code == 0 ? 'success-snackbar' : 'error-snackbar'],
            horizontalPosition: 'right',
            verticalPosition: 'top'
          })
  
          this.userService.getUsuarioList().subscribe(
            res => {
              this.usuarios = res;
            },
            err => console.log(err)
          );
        }
      });

  }
*/
}

