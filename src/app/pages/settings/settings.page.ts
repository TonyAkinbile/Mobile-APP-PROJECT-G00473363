// Import necessary Angular and Ionic modules
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonRadioGroup, IonRadio
} from '@ionic/angular/standalone';
import { SettingsService, Units } from '../../services/settings.service';

// Define the component metadata
@Component({
  selector: 'app-settings', // Component selector
  templateUrl: './settings.page.html', // HTML template for the component
  styleUrls: ['./settings.page.scss'], // Styles for the component
  standalone: true, // Indicates this is a standalone component
  imports: [
    // Import Ionic components and Angular modules
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonRadioGroup,
    IonRadio
  ]
})
export class SettingsPage implements OnInit {
  units: Units = 'metric'; // Default units (metric)

  // Inject the SettingsService into the constructor
  constructor(private settingsService: SettingsService) { }

  // Lifecycle hook that runs when the component is initialized
  ngOnInit() {
    this.units = this.settingsService.getUnits(); // Load the saved units from the service
  }

  // Handle changes to the units selection
  onUnitsChange(value: Units) {
    this.settingsService.setUnits(value); // Save the selected units to the service
  }
}