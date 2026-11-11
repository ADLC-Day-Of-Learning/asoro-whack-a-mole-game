// Countdown announcements for screen-reader users.

export const COUNTDOWN_STATUS_MILESTONE = 30;
export const COUNTDOWN_WARNING_MILESTONES = [10, 5];

export function countdownAnnouncement(remaining) {
  if (!Number.isFinite(remaining) || remaining < 0) {
    return null;
  }
  const isStatusMilestone = remaining === COUNTDOWN_STATUS_MILESTONE;
  const isWarning = COUNTDOWN_WARNING_MILESTONES.includes(remaining);
  if (!isStatusMilestone && !isWarning) {
    return null;
  }
  return {
    region: isWarning ? 'alert' : 'status',
    message: `${remaining} seconds remaining`,
  };
}

export function pendingMilestoneAnnouncement(remaining, lastAnnounced) {
  const announcement = countdownAnnouncement(remaining);
  if (announcement === null || remaining === lastAnnounced) {
    return null;
  }
  return announcement;
}
