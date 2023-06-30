import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista-Ayala';

  onlyAdults= true;

  students = [
      { firstName: 'Frank', lastName: 'Murphy', birthDate:  '6/15/1985' , gender : 'M'},
      { firstName: 'Vic', lastName: 'Reynolds',  birthDate:  '4/19/1990' , gender : 'F'},
      { firstName: 'Gina', lastName: 'Jabowski',  birthDate:  '3/18/1985', gender : 'F'},
      { firstName: 'Charls', lastName: 'Raynor', birthDate:  '4/3/1989', gender : 'M'},
      { firstName: 'Jessi', lastName: 'Glaser',  birthDate:  '7/23/2003' , gender : 'F'},
      { firstName: 'Marc', lastName: 'Fullam',   birthDate:  '12/22/2000' , gender : 'M'},
      { firstName: 'Patric', lastName: 'Fullam',   birthDate:  '11/12/2002' , gender : 'M'},
      { firstName: 'Jay', lastName: 'Bilzerian',  birthDate:  '4/5/1992', gender : 'M'}
  ];

  calculateAge(age: string): number{
       let birthDate = new Date(age);

       let timeDiff = Math.abs(Date.now() - birthDate.getTime());
       let ageToReturn = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25); 

       return ageToReturn;

    }
}
 