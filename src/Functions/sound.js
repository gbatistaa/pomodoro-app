import { Howl } from "howler";
import alarme from "../assets/sound/pomoAlarm.mp3";

export const sound = new Howl({
  src: [alarme],
  volume: 5,
});
