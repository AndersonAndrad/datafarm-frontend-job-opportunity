import {Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {DialogFieldComponent} from "../dialog-field.component";

@Injectable({
    providedIn: 'root'
})
export class DialogFieldService {
    constructor(private matDialog: MatDialog) {
    }

    open() {
        this.matDialog.open(DialogFieldComponent, {
            width: '450px',
            height: '250px',
        })
    }
}