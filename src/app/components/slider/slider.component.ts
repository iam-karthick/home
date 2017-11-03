import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/github.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  ngOnInit() {
  }
  // tslint:disable-next-line:member-ordering
  search: string;
  // tslint:disable-next-line:member-ordering
  user: any;
  // tslint:disable-next-line:member-ordering
  repos: any;
  constructor(private  gitserve: GithubService) {

  }
  // tslint:disable-next-line:one-line
  onClick(){
      this.gitserve.searchUser().subscribe(res => {
      this.user = res;
      console.log(res);
    });
  }
}


