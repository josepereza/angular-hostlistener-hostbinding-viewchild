import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit  {
  title = 'angularhostlistenerbinding';

  @ViewChild('testElement',{static:true}) testElement: ElementRef;

    globalInstance: any;

    @HostListener('window:keypress', ['$event'])
    onKeyPress(event) {
        console.log(event);
        if (event.key === 's') {
            alert('Pressed `S`!');
        }
    }

    @HostListener('window:contextmenu', ['$event'])
    onContextMenuClick(event) {
        event.preventDefault();
        console.log(event);
        alert('Right click event fired!');
    }

    @HostListener('window:mouseup', ['$event'])
    onMouseUp(event) {
        console.log(event);
    }

    constructor(
        private renderer: Renderer2,
    ) {
    }

    ngAfterViewInit(): void {
        this.globalInstance = this.renderer.listen(
            this.testElement.nativeElement,
            'click',
            () => {
                this.renderer.setStyle(
                    this.testElement.nativeElement,
                    'color',
                    'green',
                );
            },
        );
    }

    ngOnDestroy() {
        this.globalInstance();
    }
}