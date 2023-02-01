import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Istudent } from '../../model/student';
import { DashboardService } from '../../service/dashboard.service';
import { HttpcallsService } from '../../service/http.service';


@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.scss'],
})
export class StudentformComponent implements OnInit,OnDestroy {
  public studentForm!: FormGroup;
  public canEdit:boolean= true;
  public genders: any = ['Male', 'Female', 'Other'];
  public id!:number;
  constructor(
    private fb: FormBuilder,
    private httpcall: HttpcallsService,
    private router: Router,
    private route:ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}
  

  ngOnInit(): void {
    this.stdform();
    this.oneditForm()
  }

  stdform() {
    this.studentForm = this.fb.group({
      id:[''],
      name: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(6), Validators.maxLength(10)]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address: ['', [Validators.required]],
      subjectEnroll: ['', [Validators.required]],
    });
  }

  oneditForm(){
    this.route.params.subscribe((params:Params)=>{
      if(params['id']){
         this.id = +params['id']
         this.canEdit= false;
         this.httpcall.getSingleStd(this.id).subscribe(res => {
          const student:Istudent = res;
          this.studentForm.patchValue({
            id: student.id,
            name: student.name,
            password: student.password,
            gender: student.gender,
            dob: student.dob,
            address: student.address,
            subjectEnroll: student.subjectEnroll,
        })
         })
      }
    })
  }
  onsubmit() {
    this.httpcall.AddStd(this.studentForm.value).subscribe((res) => {
      
      this.openSnackBar('Student Successfully Added', 'Ok')
      this.router.navigate(['dashboard']);
    });
  }


  onUpdate(){
    let obj = {
      ...this.studentForm.value
    }

    this.httpcall.updatestd(this.id, obj).subscribe((res) =>{
      this.httpcall.$updateEmitter.next(res)
      this.canEdit = true; 
    })
    this.studentForm.reset()
    this.router.navigate(['dashboard'])
  }

  get f(){
    return this.studentForm.controls 
   } 
   
   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  ngOnDestroy(): void {
    this.studentForm.reset()
  }
}
