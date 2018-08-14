import { Component, OnInit,Output,EventEmitter } from '@angular/core'

declare let L;
@Component({
selector:'<google-map>',
templateUrl: 'registrataion-map.component.html'
})

export class RegistrationMapComponent implements OnInit {

    @Output()
    mapLatLangEvent: EventEmitter<string> = new EventEmitter<string>();

    ngOnInit() {
        const map = L.map('map').setView([13.081803, -279.717543], 8);

        map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')); //base layer

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([13.081803, -279.717543]).addTo(map)
            .bindPopup('JUDO Club-chennai north')
            .openPopup();

        map.on('click', this.onMapClick);
    }

    private onMapClick = (event: any) => {
        alert("You clicked the map at " + event.latlng);
       // console.log(this.receiveLatLng);
        this.mapLatLangEvent.emit("My Test Child"); // now correct this
      }  



}