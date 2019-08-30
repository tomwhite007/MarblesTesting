import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDummyState from './+state/dummy-state.reducer';
import { DummyStateEffects } from './+state/dummy-state.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forFeature(
      fromDummyState.DUMMYSTATE_FEATURE_KEY,
      fromDummyState.reducer
    ),
    EffectsModule.forFeature([DummyStateEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
