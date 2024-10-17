import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './home/home.component';
import { CompareEditorComponent } from './compare-editor/compare-editor.component';
import { TextcompareComponent } from './text-compare/text-compare.component';

export const appRoutes: Routes = [
  { path: '', component: CompareEditorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'textcompare', component: CompareEditorComponent },
  { path: 'textcompare2', component: TextcompareComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
