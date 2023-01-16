import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Output() works = new EventEmitter<string>();
  imgEmpty = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4DCCLp1uFPtbvLRmI-NQh-NgRYo5croM9tQ&usqp=CAU';
  imgError = 'https://media.cnn.com/api/v1/images/stellar/prod/190517103414-01-grumpy-cat-file-restricted.jpg?q=w_3000,h_2049,x_0,y_0,c_fill'

  constructor() { }

  ngOnInit(): void {
  }

  imgNoFound() {
    this.img = this.imgError;
  }

  imgFound() {
    console.log('log child')
    this.works.emit(this.img);
  }

}
