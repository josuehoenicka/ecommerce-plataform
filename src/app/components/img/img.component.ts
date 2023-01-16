import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = ''

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('changes =>', this.img)
  }
  @Input() alt: string = '';
  @Output() works = new EventEmitter<string>();
  imgEmpty = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4DCCLp1uFPtbvLRmI-NQh-NgRYo5croM9tQ&usqp=CAU';
  imgError = 'https://media.cnn.com/api/v1/images/stellar/prod/190517103414-01-grumpy-cat-file-restricted.jpg?q=w_3000,h_2049,x_0,y_0,c_fill'
  imgMessi = 'https://ichef.bbci.co.uk/news/640/cpsprodpb/2D36/production/_128047511_gettyimages-1450126571.jpg'
  counter = 0;
  counterFn: number | undefined;

  constructor() {
    // Before render
    // No async - Once time
    console.log('Constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Before & During render
    // See changes input - Ilimit Time
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes)
  }

  ngOnInit(): void {
    // Before render
    // Asycn (fetch, promises, http request) - Once Time
    console.log('ngOnInit', 'imgValue =>', this.img);
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('counter =>', this.counter)
    }, 1000)
  }

  ngAfterViewInit(): void {
    // After render
    // Handler of children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // Delete
    console.log('ngOnDestroy');
    window.clearInterval(this.counterFn);
  }

  imgNoFound() {
    this.img = this.imgError;
  }

  imgFound() {
    console.log('log child')
    this.works.emit(this.img);
  }

}
