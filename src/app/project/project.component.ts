import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
declare var $;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  p=1;
  projectForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, ) {
    this.projectForm = this.formBuilder.group({
      'name': [null, Validators.compose([Validators.required])],
      'manager': [null, Validators.compose([Validators.required])],
      'startdate': [null, Validators.compose([Validators.required])],
      'enddate': [null, Validators.compose([Validators.required])],
      'description': [null, Validators.compose([Validators.required])],
    })
  }
  ProjectList = []
  ngOnInit() {
    this.ProjectList = [{ "name": "istop", "task": "23", "date": "18/7/19", "deadline": "19/7/19", },
    { "name": "istop", "task": "23", "date": "18/7/19", "deadline": "19/7/19", },
    { "name": "istop", "task": "23", "date": "18/7/19", "deadline": "19/7/19", },
    { "name": "istop", "task": "23", "date": "18/7/19", "deadline": "19/7/19", },
    { "name": "istop", "task": "23", "date": "18/7/19", "deadline": "19/7/19", }
    ]
  }
  addnewproject() {
    this.router.navigateByUrl("dashboard/view-project")
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
  ConfrimProject(){
    if(this.projectForm.invalid){
      this.markFormGroupTouched(this.projectForm);
      return false;
    }
    else{
      this.newProject = false;  
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
