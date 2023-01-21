import {Component} from '@angular/core';
import {MapService} from '@map/map.service';
import {DialogFieldService} from "../../dialogs/dialog-field/services/dialog-field.service";

@Component({
    selector: 'app-menu-actions',
    templateUrl: './menu-actions.component.html',
    styleUrls: ['./menu-actions.component.scss']
})
export class MenuActionsComponent {

    constructor(private mapService: MapService, private dialogFieldService: DialogFieldService) {
    }

    openDashboard() {
        console.log('Open Dashboard');
        console.log(`idField: ${this.mapService.activeField}`);
        this.dialogFieldService.open()
    }

    deleteField() {
        console.log('Delete Field');
        console.log(`idField: ${this.mapService.activeField}`);
    }
}
