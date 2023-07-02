import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'materialApp',
  webDir: 'dist/materialApp',
  server: {
    androidScheme: 'https'
  }
};

export default config;
