import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  p=1;
  projectForm:FormGroup;
  constructor( private formBuilder: FormBuilder, private router: Router, ) {
    this.projectForm = this.formBuilder.group({
      'project': [null, Validators.compose([Validators.required])],
      'hours': [null, Validators.compose([Validators.required])],
      'deadline': [null, Validators.compose([Validators.required])],
      'priority': [null, Validators.compose([Validators.required])],
      'name': [null, Validators.compose([Validators.required])],
      'manager': [null, Validators.compose([Validators.required])],
      'startdate': [null, Validators.compose([Validators.required])],
      'description': [null, Validators.compose([Validators.required])],
    })
   }
  ProjectList = []
  ngOnInit() {
    this.ProjectList = [{ "name": "istop", "task": "Amish Shiravadakar", "date": "18/7/19", "deadline": "19/7/19", },
    { "name": "istop", "task": "Carole Landu", "date": "18/7/19", "deadline": "19/7/19", },
    { "name": "istop", "task": "Conan Matusov", "date": "18/7/19", "deadline": "19/7/19", },
    { "name": "istop", "task": "Deveedaas Nandi", "date": "18/7/19", "deadline": "19/7/19", },
    { "name": "istop", "task": "Stina Gunnarsdottir", "date": "18/7/19", "deadline": "19/7/19", }
    ]
  }
  newProject = false

  addnew() {
    this.newProject = true;
  }
  cancelnew() {
    this.newProject = false;
  }
  closetasks(){
    this.newProject = false;
  }
  backbtn(){
    this.router.navigateByUrl("dashboard/project")
    
  }
  ConfrimProject(){
    if(this.projectForm.invalid){
      this.markFormGroupTouched(this.projectForm);
      return false;
    }
    else{
      this.newProject = false;
    }
  }
  check=0
  select(){
   if(this.check==0)
   {
     this.check++;
     console.log(this.check)
   }
  }
  private markFormGroupTouched(formGroup: FormGroup) {
    // (<any>Object).values(formGroup.controls).forEach(control => {
    //   control.markAsTouched();
    //   if (control.controls) {
    //     this.markFormGroupTouched(control);
    //   }
    // });
    for(let i in formGroup.controls)
    formGroup.controls[i].markAsTouched();
}
}
