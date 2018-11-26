import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {google} from "@agm/core/services/google-maps-types";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent{

  // google maps zoom level
   zoom: any = 15;

  // initial center position for the map
  lat: number = 46.44;
  lng: number = 30.75;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
     lat: $event.coords.lat,
     lng: $event.coords.lng,
     draggable: false,
     visible: false
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
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

setVisible(){
    var element1 = <HTMLInputElement> document.getElementById('school_b');
    var isChecked1 = element1.checked;
    if (isChecked1){
      this.markers.marker[0].visible = true;
    }
  var element2 = <HTMLInputElement> document.getElementById('pharm_b');
  var isChecked2 = element2.checked;
  if (isChecked2){
    this.markers.marker[1].visible = true;
  }
  var element3 = <HTMLInputElement> document.getElementById('cafe_b');
  var isChecked3 = element3.checked;
  if (isChecked3){
    this.markers.marker[2].visible = true;
    this.markers.marker[3].visible = true;
    this.markers.marker[4].visible = true;
  }
 }

}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  visible: boolean;
}



