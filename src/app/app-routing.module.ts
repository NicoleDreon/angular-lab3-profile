import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-profile', component: EditComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: '/profile', pathMatch: 'full' }, // Wildcard route for a profile page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
