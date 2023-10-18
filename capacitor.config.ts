import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'reviewme',
  appName: 'reviewme',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
