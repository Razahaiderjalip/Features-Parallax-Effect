import React from 'react';
import HubspotForm from 'react-hubspot-form';

function HubspotContactForm() {
  
    return (

      <HubspotForm

        portalId='26462757'
        formId='867310e0-4a57-46dc-9fd8-309adf1ba4d9'
        onSubmit={() => console.log('Submit!')}
        onReady={(form) => console.log('Form ready!')}
        loading={<div>Loading...</div>}

      />
        
    )
}

export default HubspotContactForm