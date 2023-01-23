import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ApplicationComponent } from "./application/application.component";
import { ApplicationInterceptor } from "./core/application/interceptor/application.interceptor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ChartLineComponent } from "./main/charts/chart-line/chart-line.component";
import { DialogAuthComponent } from "./main/dialogs/dialog-auth/dialog-auth.component";
import { DialogFieldComponent } from "./main/dialogs/dialog-field/dialog-field.component";
import { HeaderComponent } from "./main/components/header/header.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { MapComponent } from "./map/map.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MenuActionsComponent } from "./main/components/menu-actions/menu-actions.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SubmissionComponent } from "./main/submission/submission.component";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ApplicationComponent,
    MenuActionsComponent,
    HeaderComponent,
    DialogAuthComponent,
    SubmissionComponent,
    DialogFieldComponent,
    ChartLineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LeafletModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApplicationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
