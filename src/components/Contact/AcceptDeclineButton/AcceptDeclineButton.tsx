import React from 'react';

function AcceptDeclineButton() {
  return (
    <div className="flex gap-2 self-end sm:self-auto">
      <button type="button" className="btn btn-xs text-success">Accept</button>
      <button type="button" className="btn btn-xs text-error">Decline</button>
    </div>
  );
}

export default AcceptDeclineButton;
