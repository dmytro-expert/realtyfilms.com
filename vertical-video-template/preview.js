const video = document.querySelector('#property-film');
const playButton = document.querySelector('.play-button');
const status = document.querySelector('#video-status');

playButton.hidden = false;
playButton.addEventListener('click', async () => {
  try {
    await video.play();
  } catch {
    playButton.hidden = true;
    status.hidden = false;
  }
});
video.addEventListener('play', () => { playButton.hidden = true; });
video.addEventListener('pause', () => { playButton.hidden = false; });
video.addEventListener('ended', () => { playButton.hidden = false; });
const showVideoError = () => {
  playButton.hidden = true;
  status.hidden = false;
};
video.addEventListener('error', showVideoError);
video.querySelector('source').addEventListener('error', showVideoError);
if (video.error) showVideoError();
