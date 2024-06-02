function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
class CardProfile extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      index: 0,
      currentTime: '0:00',
      musicList: [
        {
          name: 'xBeat',
          author: 'Taskforce Musik',
          img: 'https://dl.dropbox.com/scl/fi/ucts2gygceirq5nevpzh4/Cover.png?rlkey=4iisd7dylabh1jvufwu55lbmg&dl=0',
          audio: 'https://dl.dropbox.com/scl/fi/99vpht7cbq3fjk44ynesf/xBeat.mp3?rlkey=ntcfq01e39onrjg4spglwni21&dl=0',
          duration: '3:50'
        },{
          name: 'My Houseclub',
          author: 'Taskforce Musik',
          img: 'https://dl.dropbox.com/scl/fi/ucts2gygceirq5nevpzh4/Cover.png?rlkey=4iisd7dylabh1jvufwu55lbmg&dl=0',
          audio: 'https://dl.dropbox.com/scl/fi/q0kxauzso38yh7m8ql0n7/My-Houseclub.mp3?rlkey=uxw5nvoaw1f29cttrsblx8hf8&amp;dl=0',
          duration: '3:29'
        },{
          name: 'Sprack',
          author: 'Taskforce Musik',
          img: 'https://dl.dropbox.com/scl/fi/ucts2gygceirq5nevpzh4/Cover.png?rlkey=4iisd7dylabh1jvufwu55lbmg&dl=0',
          audio: 'https://dl.dropbox.com/scl/fi/37c7nvnd6nlet6okhkxhp/Sprack.mp3?rlkey=e09bj5cxilx6b957khlvfglbe&amp;dl=0',
          duration: '3:13'
        },{
          name: 'Project B',
          author: 'Taskforce Musik',
          img: 'https://dl.dropbox.com/scl/fi/ucts2gygceirq5nevpzh4/Cover.png?rlkey=4iisd7dylabh1jvufwu55lbmg&dl=0',
          audio: 'https://dl.dropbox.com/scl/fi/276o2q7n24mq2odplf1h3/Project-B.mp3?rlkey=w886mhazinga9gk97bh3sc0hb&amp;dl=0',
          duration: '3:04'
        },{
          name: 'Dirty Beat',
          author: 'Taskforce Musik',
          img: 'https://dl.dropbox.com/scl/fi/ucts2gygceirq5nevpzh4/Cover.png?rlkey=4iisd7dylabh1jvufwu55lbmg&dl=0',
          audio: 'https://dl.dropbox.com/scl/fi/20rrwpccb2799mk6bg9wg/Dirty-Beat.mp3?rlkey=eqhe7lga19nhnb0fl4cb6a2q1&amp;dl=0',
          duration: '3:20'
        },{
          name: 'Westhop',
          author: 'Taskforce Musik',
          img: 'https://dl.dropbox.com/scl/fi/ucts2gygceirq5nevpzh4/Cover.png?rlkey=4iisd7dylabh1jvufwu55lbmg&dl=0',
          audio: 'https://dl.dropbox.com/scl/fi/l3vtlcm1sv1o9p1z2qksx/Westhop.mp3?rlkey=mjl3l8xgglbxu7b3jjqahr7ar&amp;dl=0',
          duration: '3:30'
        },{
          name: 'Raggy',
          author: 'Taskforce Musik',
          img: 'https://dl.dropbox.com/scl/fi/ucts2gygceirq5nevpzh4/Cover.png?rlkey=4iisd7dylabh1jvufwu55lbmg&dl=0',
          audio: 'https://dl.dropbox.com/scl/fi/oj4aw42n9wgb5w43xwfkc/Raggy.mp3?rlkey=ix528ysk4n4dmxnkkfgyyb46t&amp;dl=0',
          duration: '3:31'
        },{
          name: 'Trap',
          author: 'Taskforce Musik',
          img: 'https://dl.dropbox.com/scl/fi/ucts2gygceirq5nevpzh4/Cover.png?rlkey=4iisd7dylabh1jvufwu55lbmg&dl=0',
          audio: 'https://dl.dropbox.com/scl/fi/coedmdrgifd88zaeblcn5/Trap.mp3?rlkey=g3u91yll5t4vsdgrpn8fo2uqa&amp;dl=0',
          duration: '3:31'
        },{
          name: 'Space',
          author: 'Taskforce Musik',
          img: 'https://dl.dropbox.com/scl/fi/ucts2gygceirq5nevpzh4/Cover.png?rlkey=4iisd7dylabh1jvufwu55lbmg&dl=0',
          audio: 'https://dl.dropbox.com/scl/fi/xg9vomfe9oph41xsie2ab/Space.mp3?rlkey=n7g9p9tlybktvvxby4ro0velq&amp;dl=0',
          duration: '3:57'
        },{
          name: 'Know',
          author: 'Taskforce Musik',
          img: 'https://dl.dropbox.com/scl/fi/ucts2gygceirq5nevpzh4/Cover.png?rlkey=4iisd7dylabh1jvufwu55lbmg&dl=0',
          audio: 'https://dl.dropbox.com/scl/fi/dqc0hvg5nv0ob6q7gjhvn/Know.mp3?rlkey=10fid9198hw87t8hze29jiize&amp;dl=0',
          duration: '3:04'
        }],
      pause: false });_defineProperty(this, "changeCurrentTime",

    e => {
      const duration = this.playerRef.duration;

      const playheadWidth = this.timelineRef.offsetWidth;
      const offsetWidht = this.timelineRef.offsetLeft;
      const userClickWidht = e.clientX - offsetWidht;

      const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

      this.playheadRef.style.width = userClickWidhtInPercent + "%";
      this.playerRef.currentTime = duration * userClickWidhtInPercent / 100;
    });_defineProperty(this, "hoverTimeLine",

    e => {
      const duration = this.playerRef.duration;

      const playheadWidth = this.timelineRef.offsetWidth;

      const offsetWidht = this.timelineRef.offsetLeft;
      const userClickWidht = e.clientX - offsetWidht;
      const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

      if (userClickWidhtInPercent <= 100) {
        this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
      }

      const time = duration * userClickWidhtInPercent / 100;

      if (time >= 0 && time <= duration) {
        this.hoverPlayheadRef.dataset.content = this.formatTime(time);
      }
    });_defineProperty(this, "resetTimeLine",

    () => {
      this.hoverPlayheadRef.style.width = 0;
    });_defineProperty(this, "timeUpdate",

    () => {
      const duration = this.playerRef.duration;
      const timelineWidth = this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
      const playPercent = 100 * (this.playerRef.currentTime / duration);
      this.playheadRef.style.width = playPercent + "%";
      const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));
      this.setState({
        currentTime });

    });_defineProperty(this, "formatTime",

    currentTime => {
      const minutes = Math.floor(currentTime / 60);
      let seconds = Math.floor(currentTime % 60);

      seconds = seconds >= 10 ? seconds : "0" + seconds % 60;

      const formatTime = minutes + ":" + seconds;

      return formatTime;
    });_defineProperty(this, "updatePlayer",

    () => {
      const { musicList, index } = this.state;
      const currentSong = musicList[index];
      const audio = new Audio(currentSong.audio);
      this.playerRef.load();
    });_defineProperty(this, "nextSong",

    () => {
      const { musicList, index, pause } = this.state;

      this.setState({
        index: (index + 1) % musicList.length });

      this.updatePlayer();
      if (pause) {
        this.playerRef.play();
      }
    });_defineProperty(this, "prevSong",

    () => {
      const { musicList, index, pause } = this.state;

      this.setState({
        index: (index + musicList.length - 1) % musicList.length });

      this.updatePlayer();
      if (pause) {
        this.playerRef.play();
      }
    });_defineProperty(this, "playOrPause",

    () => {
      const { musicList, index, pause } = this.state;
      const currentSong = musicList[index];
      const audio = new Audio(currentSong.audio);
      if (!this.state.pause) {
        this.playerRef.play();
      } else {
        this.playerRef.pause();
      }
      this.setState({
        pause: !pause });

    });_defineProperty(this, "clickAudio",

    key => {
      const { pause } = this.state;

      this.setState({
        index: key });


      this.updatePlayer();
      if (pause) {
        this.playerRef.play();
      }
    });}componentDidMount() {this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);this.playerRef.addEventListener("ended", this.nextSong, false);this.timelineRef.addEventListener("click", this.changeCurrentTime, false);this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);}componentWillUnmount() {this.playerRef.removeEventListener("timeupdate", this.timeUpdate);this.playerRef.removeEventListener("ended", this.nextSong);this.timelineRef.removeEventListener("click", this.changeCurrentTime);this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);}
  render() {
    const { musicList, index, currentTime, pause } = this.state;
    const currentSong = musicList[index];
    return /*#__PURE__*/(
      React.createElement("div", { className: "card" }, /*#__PURE__*/
      React.createElement("div", { className: "current-song" }, /*#__PURE__*/
      React.createElement("audio", { ref: ref => this.playerRef = ref }, /*#__PURE__*/
      React.createElement("source", { src: currentSong.audio, type: "audio/ogg" }), "Your browser does not support the audio element."), /*#__PURE__*/

      React.createElement("span", { className: "song-name" }, currentSong.name), /*#__PURE__*/
      React.createElement("span", { className: "song-autor" }, currentSong.author), /*#__PURE__*/

      React.createElement("div", { className: "time" }, /*#__PURE__*/
      React.createElement("div", { className: "current-time" }, currentTime), /*#__PURE__*/
      React.createElement("div", { className: "end-time" }, currentSong.duration)), /*#__PURE__*/

      React.createElement("div", { ref: ref => this.timelineRef = ref, id: "timeline" }, /*#__PURE__*/
      React.createElement("div", { ref: ref => this.playheadRef = ref, id: "playhead" }), /*#__PURE__*/
      React.createElement("div", { ref: ref => this.hoverPlayheadRef = ref, class: "hover-playhead", "data-content": "0:00" })), /*#__PURE__*/

      React.createElement("div", { className: "controls" }, /*#__PURE__*/
      React.createElement("button", { onClick: this.prevSong, className: "prev prev-next current-btn" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-backward" })), /*#__PURE__*/

      React.createElement("button", { onClick: this.playOrPause, className: "play current-btn" },

      !pause ? /*#__PURE__*/React.createElement("i", { className: "fas fa-play" }) : /*#__PURE__*/
      React.createElement("i", { class: "fas fa-pause" })), /*#__PURE__*/

      React.createElement("button", { onClick: this.nextSong, className: "next prev-next current-btn" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-forward" })))), /*#__PURE__*/

      React.createElement("div", { className: "play-list" },
      musicList.map((music, key = 0) => /*#__PURE__*/
      React.createElement("div", { key: key,
        onClick: () => this.clickAudio(key),
        className: "track " + (
        index === key && !pause ? 'current-audio' : '') + (
        index === key && pause ? 'play-now' : '') }, /*#__PURE__*/

      React.createElement("img", { className: "track-img", src: music.img }), /*#__PURE__*/
      React.createElement("div", { className: "track-discr" }, /*#__PURE__*/
      React.createElement("span", { className: "track-name" }, music.name), /*#__PURE__*/
      React.createElement("span", { className: "track-author" }, music.author)), /*#__PURE__*/

      React.createElement("span", { className: "track-duration" },
      index === key ?
      currentTime :
      music.duration))))));
  }}
ReactDOM.render( /*#__PURE__*/
React.createElement(CardProfile, null),
document.getElementById('root'));