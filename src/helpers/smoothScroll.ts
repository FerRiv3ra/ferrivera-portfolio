export const smoothScrollTo = (targetPosition: number, duration: number) => {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const startTime = Date.now();

  const interval = setInterval(() => {
    const timeElapsed = Date.now() - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease =
      progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

    window.scrollTo(0, startPosition + distance * ease);

    if (progress === 1) {
      clearInterval(interval);
    }
  }, 16);
};
