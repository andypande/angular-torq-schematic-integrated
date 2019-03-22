import { Component}  from '@angular/core';

@Component({ 
  selector: 'torqbtn',
  templateUrl: 'torqbtn.component.html',
  styleUrls: ['torqbtn.component.css']
})
export class TorqBtnComponent {


  constructor() {}

  onSubmit() {
    alert('Thanks!');
  }
}
