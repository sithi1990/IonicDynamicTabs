import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs';
import { TabContentComponent } from './tab-content/tab-content';
@NgModule({
	declarations: [TabsComponent,
    TabContentComponent],
	imports: [],
	exports: [TabsComponent,
    TabContentComponent]
})
export class ComponentsModule {}
