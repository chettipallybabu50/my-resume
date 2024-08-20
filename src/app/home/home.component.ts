import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPDF(): void {
    const link = document.createElement('a');
    link.href = 'assets/Suribabu_Chettipally_Resume1.pdf'; // Path to your PDF file in the assets folder
    link.download = 'Suribabu_Chettipally_Resume1.pdf'; // Name for the downloaded file
    link.click();
  }

}
