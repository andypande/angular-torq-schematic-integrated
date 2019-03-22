import { Component}  from '@angular/core';

@Component({ 
  selector: 'torqbtn',
  templateUrl: 'torqbtn.component.html',
  styleUrls: ['torqbtn.component.css']
})
export class TorqbtnComponent {


  constructor() {}

  onSubmit() {
    alert('Thanks!');
  }
}
