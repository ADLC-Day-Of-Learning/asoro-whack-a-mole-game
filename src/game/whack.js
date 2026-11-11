import { MOLE_WIDTH, MOLE_HEIGHT } from './constants.js';

const MOLE_MIN_EMERGED = MOLE_HEIGHT * 0.5;

export function isWhackable(moleY, holeY) {
  return moleY <= holeY + MOLE_MIN_EMERGED;
}

export function whackOutcome({ roundOver, busy, whacked, moleY, holeY }) {
  if (roundOver) {
    return 'ignored';
  }
  if (!busy || whacked || !isWhackable(moleY, holeY)) {
    return 'miss';
  }
  return 'hit';
}

export function pointerWhackOutcome({
  roundOver,
  busy,
  whacked,
  moleY,
  holeY,
  localX,
  localY,
}) {
  if (roundOver) {
    return 'ignored';
  }
  const onEmergedMole =
    localX >= 0 &&
    localX < MOLE_WIDTH &&
    localY >= 0 &&
    isPointOnEmergedMole(moleY, holeY, localY);
  if (!onEmergedMole) {
    return 'miss';
  }
  return whackOutcome({ roundOver, busy, whacked, moleY, holeY });
}

export function isPointOnEmergedMole(moleY, holeY, localY) {
  return localY < MOLE_HEIGHT - (moleY - holeY);
}
