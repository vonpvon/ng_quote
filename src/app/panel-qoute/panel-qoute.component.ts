import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-panel-qoute',
  standalone: true,
  templateUrl: './panel-qoute.component.html',
  styleUrls: ['./panel-qoute.component.css']
})
export class PanelQouteComponent implements OnInit {
  quote: any = { content: "Fetching quote...", author: "" };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchQuote();
  }

  fetchQuote(): void {
    this.http.get('https://api.quotable.io/random').subscribe((response: any) => {
      this.quote = response;
    }, error => {
      this.quote = { content: "Failed to fetch quote.", author: "System" };
    });
  }
}

