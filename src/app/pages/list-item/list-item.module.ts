import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../../icons/icons.module';
import { ListItemRoutingModule } from './list-item-routing.module';
import { ListItemComponent } from './list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [ListItemComponent],
  imports: [
    CommonModule,
    ListItemRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    IconsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
})
export class ListItemModule {}
