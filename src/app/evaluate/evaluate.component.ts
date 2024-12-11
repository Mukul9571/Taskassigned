// import { Component } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';

declare const bootstrap: any;

@Component({
  selector: 'app-evaluate',
  imports: [CommonModule],
  templateUrl: './evaluate.component.html',
  styleUrl: './evaluate.component.css'
})
export class EvaluateComponent {

  popup:boolean=false;
  onSubmit() {
    // Show the popup container by removing 'd-none' class
    this.popup=true;
  }

  isMobileView: boolean; // Boolean to toggle views
  private mobileQueryListener: () => void;
  private mobileQuery: MediaQueryList;

  constructor(mediaMatcher: MediaMatcher, changeDetectorRef: ChangeDetectorRef) {
    // Define the media query
    this.mobileQuery = mediaMatcher.matchMedia('(max-width: 600px)');
    this.isMobileView = this.mobileQuery.matches;

    // Listener to detect media query changes
    this.mobileQueryListener = () => {
      this.isMobileView = this.mobileQuery.matches;
      changeDetectorRef.detectChanges(); // Trigger change detection
    };

    // Use addListener for compatibility
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    // Clean up the listener using removeListener
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
  closePopup() {
    // Hide the popup container by adding 'd-none' class
    this.popup=false;

  }
  isDivVisible: boolean = false;

  toggleDiv(): void {
    this.isDivVisible = !this.isDivVisible; // Toggle the visibility of the div
  }
}
