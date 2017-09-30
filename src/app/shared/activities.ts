import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
  {
    "id": 1,
    "name": "Main Bike Trails",
    "date": new Date('06/01/2017'),
    "distance": 6.2,
    "comments": "Nice day, cool temps",
    "gpxData": '../../assets/gpx/St_Louis_Zoo.gpx'
  },
  {
    "id": 2,
    "name": "Greenway Hike",
    "date": new Date('06/03/2017'),
    "distance": 5.7,
    "comments": "Breezy and sunny",
    "gpxData": '../../assets/gpx/St_Louis_Zoo.gpx'
  },
  {
    "id": 3,
    "name": "Road to your Mom's House",
    "date": new Date('06/04/2017'),
    "distance": 2.4,
    "comments": "Always nice to see your mom",
    "gpxData": '../../assets/gpx/St_Louis_Zoo.gpx'
  },
  {
    "id": 4,
    "name": "Stewart's Ferry Loop",
    "date": new Date('06/05/2017'),
    "distance": 7.0,
    "comments": "Strenuous",
    "gpxData": '../../assets/gpx/St_Louis_Zoo.gpx'
  }
]
