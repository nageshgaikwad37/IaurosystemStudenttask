import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  errormsg!:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.errormsg = this.route.snapshot.data['msg']
  }

}