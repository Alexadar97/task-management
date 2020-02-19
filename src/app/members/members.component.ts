import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var value = 4545
    console.log(value)
  }
  memberData = {
    "apqpdevdetailsid": null, "years": [2018,2019],
    "months": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]],

    "data": [{
      "name": "Chioke Okonkwo", "ttask": 1.55, "tasks": "34", 
      "projectyear": [2018], "projectmonth": [["JAN",]],
    },
    {
      "name": "Christian Russell", "ttask": 65, "tasks": "34",
      "projectyear": [2018], "projectmonth": [["JAN", ]], 
    },
    {
      "name": "Dusya Sigachyova", "ttask": 65, "tasks": "34",
      "projectyear": [2018], "projectmonth": [["JAN", ]], 
    },
    {
      "name": "Fatima Delgadillo", "ttask": 65, "tasks": "34",
      "projectyear": [2018], "projectmonth": [["JAN", ]], 
    },
    {
      "name": "Juan Esteban Sarmiento", "ttask": 65, "tasks": "34",
      "projectyear": [2018], "projectmonth": [["JAN", ]], 
    },
    {
      "name": "Katayama Fumiki", "ttask": 65, "tasks": "34",
      "projectyear": [2018], "projectmonth": [["JAN", ]], 
    },
    {
      "name": "Mónica Ribeiro", "ttask": 65, "tasks": "34",
      "projectyear": [2018], "projectmonth": [["JAN", ]], 
    },
    {
      "name": "Nicolina Lindholm", "ttask": 65, "tasks": "34",
      "projectyear": [2018], "projectmonth": [["JAN", ]], 
    },
    {
      "name": "Phet Putrie", "ttask": 65, "tasks": "34",
      "projectyear": [2018], "projectmonth": [["JAN", ]], 
    },
    {
      "name": "Veerle de Bree", "ttask": 65, "tasks": "34",
      "projectyear": [2018], "projectmonth": [["JAN", ]], 
    },

    ]
  }
  projectmonth(year, month, index) {
    console.log(year, month, index)
    if (this.memberData.data[index].projectyear != null) {
      if ((this.memberData.data[index].projectyear).indexOf(year) != -1) {
        var yearIndex = (this.memberData.data[index].projectyear).indexOf(year);
        if (this.memberData.data[index].projectmonth[yearIndex].indexOf(month) != -1) {
      
           
        
              return true;
            
          }
          else {
            return false;
          }
        }
      }

    
    }
  }




