import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    const CURRENT_TIME_KEY = "videoplayer-current-time";
    const currentTimeValue = localStorage.getItem(CURRENT_TIME_KEY);
    
    player.setCurrentTime(currentTimeValue || 0);
    
   player.on('timeupdate', throttle(onPlayerTimeUpdate, 1000));

    function onPlayerTimeUpdate (seconds) {
        player.getCurrentTime().then(function(seconds) {
            console.log(seconds);
            localStorage.setItem(CURRENT_TIME_KEY, seconds)
            }).catch(function(error) {
            console.log('an error occurred', error)
            }); 
    }