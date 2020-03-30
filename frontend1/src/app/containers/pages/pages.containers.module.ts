import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapseModule, RatingModule, TabsModule, AccordionModule, BsDropdownModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddNewProductModalComponent } from './add-new-product-modal/add-new-product-modal.component';
import { ListPageHeaderComponent } from './list-page-header/list-page-header.component';
import { ComponentsPagesModule } from '../../components/pages/components.pages.module';
import { ComponentsCardsModule } from '../../components/cards/components.cards.module';
import { FeatureComparisonComponent } from './feature-comparison/feature-comparison.component';
import { ComponentsPlayerModule } from 'src/app/components/player/components.player.module';
import { LayoutContainersModule } from '../layout/layout.containers.module';
import { ProductDetailInfoAltComponent } from './product-detail-info-alt/product-detail-info-alt.component';
import { ProductDetailOrdersComponent } from './product-detail-orders/product-detail-orders.component';
import { ProductDetailCommentsComponent } from './product-detail-comments/product-detail-comments.component';
import { ProductDetailInfoComponent } from './product-detail-info/product-detail-info.component';
import { ProductDetailTabsComponent } from './product-detail-tabs/product-detail-tabs.component';

@NgModule({
  declarations: [
    AddNewProductModalComponent,
    ListPageHeaderComponent,
    FeatureComparisonComponent,
    ProductDetailInfoAltComponent,
    ProductDetailOrdersComponent,
    ProductDetailCommentsComponent,
    ProductDetailInfoComponent,
    ProductDetailTabsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CollapseModule,
    FormsModule,
    LayoutContainersModule,
    NgSelectModule,
    LightboxModule,
    ComponentsPagesModule,
    ComponentsCardsModule,
    ComponentsPlayerModule,
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    AddNewProductModalComponent,
    ListPageHeaderComponent,
    FeatureComparisonComponent,
    ProductDetailInfoAltComponent,
    ProductDetailOrdersComponent,
    ProductDetailCommentsComponent,
    ProductDetailInfoComponent,
    ProductDetailTabsComponent
  ]
})
export class PagesContainersModule { }
