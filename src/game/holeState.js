// Pure bookkeeping for a single hole's mole lifecycle.

export function initialHoleState() {
  return { busy: false, whacked: false };
}

export function onMoleSpawned(state) {
  return { busy: true };
}

export function onMoleWhacked(state) {
  return { ...state, whacked: true };
}

export function onMoleLowered(state) {
  return { busy: false };
}

export function shouldLowerAfterUpTime(state) {
  return !state.whacked;
}
