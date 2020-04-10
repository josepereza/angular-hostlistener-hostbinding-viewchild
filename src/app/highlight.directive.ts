
import { Directive, ElementRef, HostListener, Renderer2, HostBinding } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    @HostBinding('style.border') border: string;
    constructor(private e: ElementRef, private renderer: Renderer2) {
        // First time this function will get call from Constructor
        this.ChangeBgColor('yellow');
    }
    ChangeBgColor(backgroundColor: string) {
        this.renderer.setStyle(this.e.nativeElement, 'background', backgroundColor);
    }
    // On Mouse Over event
    @HostListener('mouseover') onMouseOver() {
        this.ChangeBgColor('lightblue');
        this.border = '5px solid red';
    }
    // On Mouse leave event
    @HostListener('mouseleave') onMouseLeave() {
        this.ChangeBgColor('lightgreen');
    }
    // On click event
    @HostListener('click') onClick() {
        window.alert('Host Element Clicked');
    }
}