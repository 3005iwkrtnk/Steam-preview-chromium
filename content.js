chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "avatar") {
    const img = document.querySelector('.playerAvatarAutoSizeInner img');
    if (img) img.src = msg.url;
  }
  if (msg.action === "frame") {
    let frame = document.querySelector('.profile_avatar_frame');
    if (!frame) {
      frame = document.createElement('div');
      frame.className = 'profile_avatar_frame';
      frame.style.position = 'absolute';
      frame.style.top = '0';
      frame.style.left = '0';
      frame.style.pointerEvents = 'none';
      const img = document.createElement('img');
      img.src = msg.url;
      img.style.width = '100%';
      img.style.height = '100%';
      frame.appendChild(img);
      const avatar = document.querySelector('.playerAvatarAutoSizeInner');
      if (avatar) avatar.appendChild(frame);
    } else {
      frame.querySelector('img').src = msg.url;
    }
  }
  if (msg.action === "bg") {
    const profileBG = document.querySelector('.no_header.profile_page');
    if (profileBG) {
      profileBG.style.backgroundImage = `url(${msg.url})`;
      profileBG.style.backgroundSize = 'cover';
    }
  }
  if (msg.action === "mini") {
    const miniBG = document.querySelector('.profile_in_game.persona');
    if (miniBG) {
      miniBG.style.backgroundImage = `url(${msg.url})`;
      miniBG.style.backgroundSize = 'cover';
    }
  }
  if (msg.action === "reset") {
    location.reload();
  }
});