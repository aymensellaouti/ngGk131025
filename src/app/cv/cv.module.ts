import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CVRoutingModule } from './cv.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CVRoutingModule,
        CvComponent,
        ListComponent,
        ItemComponent,
        CvCardComponent,
        DefaultImagePipe,
        DetailsCvComponent,
        AddCvComponent,
        EmbaucheComponent
    ],
})
export class CvModule {}
