import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-dialog-field',
    templateUrl: './dialog-field.component.html',
    styleUrls: ['./dialog-field.component.scss']
})
export class DialogFieldComponent {
    constructor(private dialogRef: MatDialogRef<DialogFieldComponent>) {}

    close(){
        this.dialogRef.close()
    }
}