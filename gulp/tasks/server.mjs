import browserSync from 'browser-sync';
import { paths } from '../config.mjs';

const serverBS = browserSync.create();
const serverConfig = {
  server: {
    baseDir: paths.dist._, // Убедитесь, что путь указан правильно
  },
};

const server = (done) => {
  serverBS.init(serverConfig, () => {
    console.log('✅ Сервер запущен'); // Опционально
    done(); // Завершаем задачу
  });
};

export default server;
export { serverBS };