const Clip = require('./clip');
const PlaybackManager = require('./playback');

class KillClip extends Clip {
  touch () {
    PlaybackManager.kill();
  }

  isScheduled () {
    return false;
  }

  isStopped () {
    return true;
  }

  isIdle () {
    return false;
  }

  isPlaying () {
    return false;
  }

}

module.exports = KillClip;
