import { ROUND_SECONDS } from './constants.js';

export const SPAWN_INTERVAL_START = 1100;
export const SPAWN_INTERVAL_END = 380;

export const MOLE_UP_TIME_START = 1100;
export const MOLE_UP_TIME_END = 450;

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

function lerp(start, end, t) {
  return start + (end - start) * t;
}

export function roundProgress(elapsedMs) {
  return clamp01(elapsedMs / (ROUND_SECONDS * 1000));
}

export function spawnInterval(elapsedMs) {
  return lerp(SPAWN_INTERVAL_END, SPAWN_INTERVAL_START, roundProgress(elapsedMs));
}

export function moleUpTime(elapsedMs) {
  return lerp(MOLE_UP_TIME_START, MOLE_UP_TIME_END, roundProgress(elapsedMs));
}
