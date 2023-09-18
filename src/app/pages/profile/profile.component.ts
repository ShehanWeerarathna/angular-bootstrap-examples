import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''), // Added for radio group
    english: new FormControl(false),
    spanish: new FormControl(false),
    french: new FormControl(true),
    country: new FormControl(''),
    profilePic: new FormControl<File|null>(null)
  });
  onImageUpload(event: Event) {
    console.log(event);
  }
  onSubmit() {
    
  }
}
