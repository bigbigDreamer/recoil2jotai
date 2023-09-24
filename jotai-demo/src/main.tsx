
import Launcher from 'react-launcher';
import routes from './routes'
import jotaiPlugin from './plugins/launcher-plugin-jotai';

import './index.css'

const app = new Launcher({
  routes
})

app.use(jotaiPlugin);

app.start()
