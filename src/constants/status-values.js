export const CLOSED = 'C';
export const APPROVED = 'A';
export const WORKSHEET = 'W';
export const SUBMITTED = 'S';

export const STATUS_VALUES = {
  [CLOSED]: { id: CLOSED, displayName: 'Closed' },
  [APPROVED]: { id: APPROVED, displayName: 'Approved' },
  [WORKSHEET]: { id: WORKSHEET, displayName: 'Worksheet' },
  [SUBMITTED]: { id: SUBMITTED, displayName: 'Submitted' },
};

export const BULK_ACTION_VALUES = {
  [CLOSED]: { targetStatus: CLOSED, displayName: 'Close' },
  [APPROVED]: { targetStatus: APPROVED, displayName: 'Approve' },
  [WORKSHEET]: { targetStatus: WORKSHEET, displayName: 'Worksheet' },
  [SUBMITTED]: { targetStatus: SUBMITTED, displayName: 'Submit' },
};
