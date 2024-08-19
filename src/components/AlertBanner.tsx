import React from 'react'

interface Props {
    dismissAlert: () => void;
}

function AlertBanner({dismissAlert}: Props) {
    

  return (
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={dismissAlert}></button>
    </div>
  )
}

export default AlertBanner