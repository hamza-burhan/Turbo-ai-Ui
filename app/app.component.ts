import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeButton: string = 'Internal Knowledge';
  placeholder: string = 'Query Internal Files...';
  buttonText: string = '';
  links: Array<string>;
  toasterIcon: string = '';
  toasterText: string = '';
  showMenu: boolean = false;
  toastb: boolean = false;
  image: string = 'https://www.google.com/search?q=random+avatar&tbm=isch&ved=2ahUKEwj-ue3BifaCAxWeUaQEHToLB-QQ2-cCegQIABAA&oq=random+&gs_lcp=CgNpbWcQARgAMgQIIxAnMgoIABCABBCKBRBDMgoIABCABBCKBRBDMgoIABCABBCKBRBDMgoIABCABBCKBRBDMgoIABCABBCKBRBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECAAQAzoICAAQgAQQsQM6DQgAEIAEEIoFEEMQsQM6CwgAEIAEELEDEIMBUOkLWNcXYJ4faABwAHgAgAGMAogB_A2SAQMyLTiYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=LO1tZf7zGp6jkdUPupacoA4&bih=595&biw=1280&rlz=1C1KNTJ_en-GBPK1077PK1077#imgrc=LW-M3HkBVVGM4M'
  setActive(buttonName: string, placeHolder: string): void {
    this.activeButton = buttonName;
    this.placeholder = placeHolder;
  }
  // adjustTextareaHeight() {
  //   const textarea = document.getElementById('yourTextareaId') as HTMLTextAreaElement;
  //   textarea.style.height = 'auto';
  //   textarea.style.height = (textarea.scrollHeight) + 'px';
  // }
  updateButtonText() {
    this.buttonText = 'New Topic'; // Change the text as needed
  }
  onTextareaFocus() {
    const inputContainer = document.getElementById('input-main-container');
    inputContainer.style.border = '2px solid gray';
  }
  onTextareaFocusOut() {
    const inputContainer = document.getElementById('input-main-container');
    inputContainer.style.border = '1px solid #d0d5dd';
  }
  resetButtonText() {
    this.buttonText = '';
  }
  onDoubleClick() {
    this.showMenu = true;
    console.log(this.showMenu);
    
  }
  closeMenu() {
    this.showMenu = false;
  }
  ngOnInit() {
    this.links = ['www.google.com', 'www.msn.com'];
  }
  toaster(toasterIcon, toasterText) {
    const progressBar = document.getElementById('progress-bar');
    const toast = document.getElementById('toast');
    const toastContainer = document.getElementById('toast-container');

    progressBar.style.transition = 'none';
    progressBar.style.width = '100%';
    progressBar.offsetWidth;
    progressBar.style.transition = 'width 4s linear';
    setTimeout(() => {
      progressBar.style.width = '0%';
    }, 100);
    this.toasterIcon = toasterIcon;
    this.toasterText = toasterText;

    if (toast) {
      toastContainer.style.zIndex = '0';
      toast.classList.add('active');
      setTimeout(() => {
        toast.classList.remove('active');
        toastContainer.style.zIndex = '-10';
      }, 4000);
    }
  }
}
