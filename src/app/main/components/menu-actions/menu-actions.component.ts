import { Component } from "@angular/core";
import { DialogFieldService } from "../../dialogs/dialog-field/services/dialog-field.service";
import { MapService } from "src/app/map/map.service";

@Component({
  selector: "app-menu-actions",
  templateUrl: "./menu-actions.component.html",
  styleUrls: ["./menu-actions.component.scss"],
})
export class MenuActionsComponent {
  constructor(
    private mapService: MapService,
    private dialogFieldService: DialogFieldService
  ) {}

  openDashboard() {
    if (!this.mapService.activeField) return;

    console.log("Open Dashboard");
    console.log(`idField: ${this.mapService.activeField}`);
    this.dialogFieldService.open(this.mapService.activeField);
  }

  deleteField() {
    console.log("Delete Field");
    console.log(`idField: ${this.mapService.activeField}`);
  }
}
