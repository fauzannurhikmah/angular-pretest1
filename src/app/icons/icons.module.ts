import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import {
  IconSunFilled,
  IconBellRinging,
  IconDashboard,
  IconSitemap,
  IconPlus,
  IconPencil,
  IconTrash,
} from 'angular-tabler-icons/icons';

const icons = {
  IconSunFilled,
  IconBellRinging,
  IconDashboard,
  IconSitemap,
  IconPlus,
  IconPencil,
  IconTrash,
};

@NgModule({
  imports: [TablerIconsModule.pick(icons)],
  exports: [TablerIconsModule],
})
export class IconsModule {}
