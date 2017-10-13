import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IActivity } from '../shared/activity.model';
import { ActivityService } from '../services/activity.service';
import { SAVED_ACTIVITIES } from '../shared/activities';

var apiToken = environment.MAPBOX_API_KEY;
declare var omnivore: any;
declare var L: any;

const defaultCoords: number[] = [36.2, -86.8]
const defaultZoom: number = 8

@Injectable()
export class MapService {

  constructor() {}

  getActivity(id: number){
    return SAVED_ACTIVITIES.slice(0).find(run => run.id == id)
  }

  plotActivity(id: number){
    var myStyle = {
      "color": "#3949AB",
      "weight": "5",
      "opacity": "0.95"
    }

    var map = L.map('map').setView(defaultCoords, defaultZoom);

    map.maxZoom = 100;
    L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
      maxZoom: 18,
      // id: 'mapbox.streets-basic',
      // id: 'mapbox.outdoors',
      id: 'mapbox.run-bike-hike',
      accessToken: apiToken
    }).addTo(map);

    var customLayer = L.geoJson(null, {
      style: myStyle
    });

    var gpxLayer = omnivore.gpx(SAVED_ACTIVITIES.slice(0).find(run => run.id == id).gpxData, null, customLayer)
    .on('ready', function(){
      map.fitBounds(gpxLayer.getBounds());
    }).addTo(map);
  }
}