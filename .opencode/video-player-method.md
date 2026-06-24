# Custom Video Player Method

## HTML markup (add anywhere):
```html
<div class="video-player">
  <video src="path/to/video.webm"></video>
  <button class="video-btn"><i class="fas fa-play"></i></button>
</div>
```

## Call `initVideoPlayers()` in the page script:
```js
initVideoPlayers();
```

## CSS (already in style.css):
- `.video-player` — relative wrapper, full width
- `.video-player video` — full width, border, rounded corners
- `.video-btn` — circular play/pause button at bottom-right

## JS (already in layout.js):
- `initVideoPlayers()` auto-initializes all `.video-player` elements
- Removes native `controls` attribute
- Toggles play/pause and swaps `fa-play` / `fa-pause` icons
- Resets to play icon on `ended` event
