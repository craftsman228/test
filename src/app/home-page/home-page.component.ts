import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {google} from "@agm/core/services/google-maps-types";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent{

  zoom: number = 15;
  lat: number = 46.44;
  lng: number = 30.75;

  markers: IMarker[] = [
    {
      lat: 46.440671,
      lng: 30.749340,
      label: 'I am here',
      draggable: false,
      visible: true
    },
    {
      lat: 46.439067,
      lng: 30.753642,
      label: 'School #56',
      draggable: false,
      visible: false
    },
    {
      lat: 46.439935,
      lng:  30.750155,
      label: 'Apteka-Germes',
      draggable: true,
      visible: false
    },
    {
      lat: 46.442996,
      lng: 30.749804,
      label: 'SushiSet',
      draggable: false,
      visible: false
    },
    {
      lat: 46.441301,
      lng: 30.749019,
      label: 'Lviv Croissants',
      draggable: false,
      visible: false
    },
    {
      lat:  46.441602,
      lng: 30.746858,
      label: 'Shtrudel',
      draggable: false,
      visible: false,
    }
  ]

mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false,
      visible: false
    });
  }

  buttonsForm : FormGroup;

   setVisible(){
     this.buttonsForm = new FormGroup({
       school : new FormControl(),
       pharm : new FormControl(),
       cafe : new FormControl()
     });

    if (this.buttonsForm.controls.school.touched){
      this.markers[0].visible = true;
    }
  if (this.buttonsForm.controls.pharm.touched){
        this.markers[1].visible = true;
  }
  if (this.buttonsForm.controls.cafe.touched){
    this.markers[2].visible = true;
    this.markers[3].visible = true;
    this.markers[4].visible = true;
  }
 }
}

interface IMarker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  visible: boolean;
}





