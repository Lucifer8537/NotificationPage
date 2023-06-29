import { Component, OnInit } from '@angular/core';
import { LABEL } from './label.constant';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'notification-page';
  Label = {
    NOTIFICATION: LABEL.NOTIFICATIONS,
    MARK_AS_ALL_READ: LABEL.MARK_ALL_AS_READ,
  };
  isDesktopView!: boolean;
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    console.log('this is called');
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isDesktopView = !result.matches;
      });
  }
}
