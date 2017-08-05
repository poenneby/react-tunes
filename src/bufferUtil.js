export function playSound(audioContext, buffer, time) {
  var source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.start(time);
}

export function loadSounds(audioContext, obj, soundMap, callback) {
  var names = [];
  var paths = [];
  for (var name in soundMap) {
    var path = soundMap[name];
    names.push(name);
    paths.push(path);
  }
  const bufferLoader = new BufferLoader(audioContext, paths, (bufferList) => {
    for (var i = 0; i < bufferList.length; i++) {
      var buffer = bufferList[i];
      var name = names[i];
      obj[name] = buffer;
    }
    if (callback) {
      // TODO: Pass an object with buffers back to caller, promisify it
      callback();
    }
  });
  bufferLoader.load();
}


class BufferLoader {
  constructor(audioContext, urlList, callback) {
    this.audioContext = audioContext;
    this.urlList = urlList;
    this.onload = callback;
    this.bufferList = [];
    this.loadCount = 0;
  }

  loadBuffer(url, index) {
    fetch(url)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => this.audioContext.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        this.bufferList[index] = audioBuffer;
        if (++this.loadCount === this.urlList.length)
          this.onload(this.bufferList);
      });
  }

  load() {
    for (var i = 0; i < this.urlList.length; ++i) {
      this.loadBuffer(this.urlList[i], i);
    }
  }
}
