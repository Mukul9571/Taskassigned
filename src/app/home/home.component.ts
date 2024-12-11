import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  data = [
    {
      Title: 'AI-Powered Waste Management',
      Punchline: 'Turning natural waste into wealth with AI',
      Submitted: '14 Nov, 2024',
      Category: 'Platform',
      Potential: 'Medium',
    },
    {
      Title: 'Smart City Traffic Control',
      Punchline: 'AI optimization of heavy city traffic flow',
      Submitted: '13 Nov, 2024',
      Category: 'Marketplace',
      Potential: 'High',
    },
    {
      Title: 'AI Tutor for Students',
      Punchline: 'Personalized education through AI',
      Submitted: '29 Oct, 2024',
      Category: 'Product',
      Potential: 'Medium',
      action: 'Evaluate'
    },
    {
      Title: 'Food Quality Analysis in AI',
      Punchline: 'Nozzles to reduce water wastage by 98%',
      Submitted: '14 Nov, 2024',
      Category: 'Platform',
      Potential: 'Medium',
    },
    {
      Title: 'Energy Producing Roads',
      Punchline: 'Socially responsible Robo-Advisor',
      Submitted: '13 Nov, 2024',
      Category: 'Marketplace',
      Potential: 'High',
    },
    {
      Title: 'Bottle Light Bulbs',
      Punchline: 'Workforce feel engaged, heard, supported',
      Submitted: '29 Oct, 2024',
      Category: 'Product',
      Potential: 'Medium',
    },
    {
      Title: 'A Slow Cooking Food Bag',
      Punchline: 'Feedback platforms enabling employees',
      Submitted: '14 Nov, 2024',
      Category: 'Platform',
      Potential: 'Medium',
    },
    {
      Title: 'Medical Drones',
      Punchline: 'Algae protein for nutrition in poorer regions',
      Submitted: '13 Nov, 2024',
      Category: 'Marketplace',
      Potential: 'Low',
    },
    {
      Title: 'Access to Finance Stores',
      Punchline: 'Liquid nano-clay can grow crops in deserts',
      Submitted: '29 Oct, 2024',
      Category: 'Product',
      Potential: 'High',
    },
    {
      Title: 'The Paper Weight Armband',
      Punchline: 'Virtual reality headsets for women’s eyes',
      Submitted: '14 Nov, 2024',
      Category: 'Platform',
      Potential: 'Low',
    },
  ];

  clickedState: { [key: string]: boolean } = {
    pending: false,
    completed: false
  };

  // constructor() { }

  ngOnInit(): void {
    // Load the saved clicked state from localStorage (if any)
    const savedState = localStorage.getItem('clickedState');
    if (savedState) {
      this.clickedState = JSON.parse(savedState);
    }
  }

  // Toggle the clicked state for Pending or Completed
  togglePurple(section: string): void {
    this.clickedState['pending'] = false;
    this.clickedState['completed'] = false;

    // Set the clicked section to true (purple)
    this.clickedState[section] = true;

    // Save the updated state in localStorage
    localStorage.setItem('clickedState', JSON.stringify(this.clickedState));
  }

  // Function to check if the text should be purple for Pending or Completed
  isPurple(section: string): boolean {
    return this.clickedState[section];
  }

  performAction(item: any): void {
    console.log('Action performed for:', item.Title);
    // Custom logic for the action can be implemented here.
  }
  getTotal() {
    return this.data.length;
  }
  pageNumber() {
    var tot = this.getTotal();
    var pageNo = tot / 10 * 10 + 1;
    // return "pageNo";
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
}
