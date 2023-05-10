import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'todo.task.app',
  appName: 'ToDoTask',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
