function playAnimation() {
  playRandomSound();

  const interval = setInterval(() => {
    img.src = frames[currentFrame];
    currentFrame++;

    if (currentFrame >= frames.length) {
      clearInterval(interval);
      currentFrame = 0;
    }
  }, 300);
}