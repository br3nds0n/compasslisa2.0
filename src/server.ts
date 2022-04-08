import 'dotenv/config';
import 'reflect-metadata';

import App from './App';

async function server(): Promise<void> {
  const APP = await App.init();
  const PORT: string = process.env.PORT_SERVER;

  APP.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}`));
}

server();
