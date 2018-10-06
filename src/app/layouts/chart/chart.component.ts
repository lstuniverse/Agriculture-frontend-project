import {Component, OnInit} from '@angular/core';
import {PortService} from '../../@services/portService';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  port: object[];
  pEast: object[];
  pWest: object[];
  portCompair: object[];
  resultArray: object[];
  objectsAreSame: any;
  timeInterval: any;

  constructor(private _portService: PortService) {
  }

  ngOnInit() {
    this.timeInterval = setInterval(() => {
      this.getPort();
      this.getPortCompair();
    }, 1000);

    // this.getPortE();
    // this.getPortW();
  }

  getPort() {
    this._portService.getPort().then(data => {
      this.port = data;
      // console.log(this.port);
    });
  }

  getPortCompair() {
    this._portService.getPortCompair().then(data => {
      this.portCompair = data;
      // console.log(this.portCompair);

      for (let i in this.port) {
        const portI = this.port[i];

        for (let j in this.portCompair) {
          const portJ = this.portCompair[j];

          if(portI["id"] === portJ["id"]) {

          }else {

          }

        }
      }

      // const finalarray = [];
      //
      // this.port.forEach((e1) => this.portCompair.forEach((e2) => {
      //   if (e1 === e2) {
      //     finalarray.push(e1);
      //     console.log(finalarray);
      //   }
      // }));
      // return finalarray;
    });
  }


  getPortE() {
    this._portService.getEPort().then(data => {
      this.pEast = data;
    });
  }

  getPortW() {
    this._portService.getWPort().then(data => {
      this.pWest = data;
    });
  }

  checkOperation(port) {
    const index = port - 1;
    if (this.port[index]['operation_name'] === 'connect') {
      return 'connect';
    } else if (this.port[index]['operation_name'] === 'disable') {
      return 'disable';
    } else {
      return 'disconnect';
    }
  }

  checkPair(port, position) {
    console.log(port, position);
    // if (this.port[index]['id'] && this.port[index]['operation_name'] === 'connect') {
    //   alert(this.port[index]['id'] + ' ' + this.port[index]['operation_name'] + ' ' + this.port[index]['con_id']);
    // }
  }

  pushDescription(port) {
    const index = port - 1;

    if (this.port[index]['id'] && this.port[index]['operation_name'] === 'connect') {
      return 'Connected: ' + this.port[index]['con_id'];
    } else {
      // console.log('err');
    }
  }

}
