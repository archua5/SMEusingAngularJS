import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { SignupComponent } from './auth/signup/signup/signup.component';
import { ChatbotComponent } from './chatbot/chatbot/chatbot.component';
import { GraphsdisplayComponent } from './graphs/graphsdisplay/graphsdisplay.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TipsandtricksComponent } from './tipsandtricks/tipsandtricks/tipsandtricks.component';
import { UserhomepageComponent } from './userhome/userhomepage/userhomepage.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: '', component: HomepageComponent},
  { path: 'userhome', component: UserhomepageComponent},
  { path: 'graphs', component: GraphsdisplayComponent},
  { path: 'tipsandtricks', component: TipsandtricksComponent},
  { path: 'chatbot', component: ChatbotComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
