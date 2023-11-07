import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../../icons/icons.module';
import { ListItemRoutingModule } from './list-item-routing.module';
import { ListItemComponent } from './list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

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
    NgxSkeletonLoaderModule.forRoot({
      animation: 'progress',
      theme: {
        'border-radius': '6px',
        'background-color': '#BDBDBD30',
      },
    }),
  ],
})
export class ListItemModule {}
