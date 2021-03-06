import { NgModule, InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
    production: boolean;
    applicationEndpoint: string;
    appServiceEndpoint: string;
    appInsightsInstrumentKey: string;
    envType: string;
}