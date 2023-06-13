import { reactive } from "vue";

import Echo from "laravel-echo";
import Pusher from "pusher-js";
window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: "pusher",
  key: import.meta.env.VITE_WEBSOCKETS_KEY,
  wsHost: import.meta.env.VITE_WEBSOCKETS_SERVER,
  wsPort: 6001,
  cluster: "mt1",
  forceTLS: false,
  disableStats: true,
});

Pusher.log = function (message) {
  window.console.log(message);
};
