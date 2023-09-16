import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(TIME_KEY, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(TIME_KEY)) || 0);
