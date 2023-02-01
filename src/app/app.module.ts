import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashbordComponent } from './shared/components/dashbord/dashbord.component';
import { LoginComponent } from './shared/components/login/login.component';
import { StudentformComponent } from './shared/components/studentform/studentform.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
// import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoaderInterceptorService } from './shared/service/loader-interceptor.service';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    StudentformComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSortModule,
    MatSnackBarModule
    

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:LoaderInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
