import React from 'react';
import HubspotForm from 'react-hubspot-form';

function HubspotContactFormDemo() {
  
    return (

      <HubspotForm

        portalId='26462757'
        formId='ac3a0360-3621-4442-b239-276067bdb33c'
        onSubmit={() => console.log('Submit!')}
        onReady={(form) => console.log('Form ready!')}
        loading={<div>Loading...</div>}

      />
        
    )
}

export default HubspotContactFormDemo