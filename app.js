var e = document.getElementById('watchme');
e.addEventListener('animationstart', listener, false);
e.addEventListener('animationend', listener, false);
e.addEventListener('animationiteration', listener, false);

e.className = 'box slideInRight';

function listener(e) {
  switch(e.type) {
    case 'animationstart':
      console.log('Started: elapsed time is ' + e.elapsedTime);
      break;
    case 'animationend':
      console.log('Ended: elapsed time is ' + e.elapsedTime);
      break;
    case 'animationiteration':
      console.log('New loop started at time ' + e.elapsedTime);
      break;
  }
}
