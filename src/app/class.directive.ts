import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  color1 = '';
  color2 = '';
  constructor(private element: ElementRef) {
    console.log('checking my custom directive');
    this.element.nativeElement.style.fontSize = '4rem';
    this.element.nativeElement.style.fontWeight = 800;

    this.element.nativeElement.style.width = '30%';
    this.element.nativeElement.style.backgroundClip = 'text';
    this.element.nativeElement.style.webkitBackgroundClip = 'text';
    this.element.nativeElement.style.color = 'transparent';
  }

  @Input() set backgroundColor1(color1: string) {
    this.color1 = color1;
    this.element.nativeElement.style.backgroundImage = `linear-gradient(160deg,${this.color1} 0%, #eee 100%)`;
  }

  @Input() set backgroundColor2(color2: string) {
    this.color2 = color2;
    console.log(this.color2);
    this.element.nativeElement.style.backgroundImage = `linear-gradient(160deg,${this.color1} 0%, ${this.color2} 100%)`;
  }
}
