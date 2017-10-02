export function playBuffer(audioContext, destinationNode, buffer, time) {
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(destinationNode);
  destinationNode.connect(audioContext.destination);
  source.start(time);
}

export function loadSounds(audioContext, soundMap, callback) {
  return new Promise((resolve, reject) => {
    const names = [];
    const paths = [];
    for (let name in soundMap) {
      const path = soundMap[name];
      names.push(name);
      paths.push(path);
    }
    const bufferLoader = new BufferLoader(audioContext, paths, (bufferList) => {
      const buffers = [];
      bufferList.forEach((buffer, i) => {
        buffers[names[i]] = buffer;
      });
      resolve(buffers);
    });
    bufferLoader.load();
  });
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
    this.urlList.map((url, i) => this.loadBuffer(url, i));
  }
}
