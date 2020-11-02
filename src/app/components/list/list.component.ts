import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private listService:ListService
  ) { }

  listData;

  ngOnInit(): void {
    this.listService.getTeams().subscribe(
      resp => {
        this.listData = resp;
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
