import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-skeleton-loading',
  templateUrl: './ng-skeleton-loading.component.html',
  styleUrls: ['./ng-skeleton-loading.component.scss']
})
export class NgSkeletonLoadingComponent implements OnInit {

  title = '';
  description = '';
  imgSrc = '';
  profileSrc = '';
  btn = '';

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      this.title = 'Title';
      this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . . .';
      this.imgSrc = '../../../assets/imgs/img1.jpg';
      this.profileSrc = '../../../assets/imgs/img2.png';
      this.btn = 'Button';
    }, 5000)

  }

}
