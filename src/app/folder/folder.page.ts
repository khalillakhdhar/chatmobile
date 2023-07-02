import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string="Bienvenu";
  public username:string="";

  constructor(private route:Router) {}

  ngOnInit() {
   // this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  access()
  {
    localStorage.setItem("username",this.username);
    this.route.navigate(['/chat']);
  }
}
