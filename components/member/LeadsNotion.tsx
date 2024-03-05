import React, { useState } from 'react';


interface Lead {
  name: string;
  position:string;
  kiit_email_id:string;
  personal_email_id:string;
  phone:number;
  current_year:number;
  branch:string;
  roll_number:number;
  type:string;
  portfolio_website:string;
  github_URL:string;
}

const LeadsNotion: React.FC<{ selectedLead: Lead }> = ({ selectedLead }) => {
  return (
    <div>
      <h2>{selectedLead.name}'s Details</h2>
      <h2>{selectedLead.position}'s Details</h2>
      <h2>{selectedLead.kiit_email_id}'s Details</h2>
      <h2>{selectedLead.personal_email_id}'s Details</h2>
      <h2>{selectedLead.phone}'s Details</h2>
      <h2>{selectedLead.current_year}'s Details</h2>
      <h2>{selectedLead.branch}'s Details</h2>
      <h2>{selectedLead.roll_number}'s Details</h2>
      <h2>{selectedLead.type}'s Details</h2>
      <h2>{selectedLead.portfolio_website}'s Details</h2>
      <h2>{selectedLead.github_URL}'s Details</h2>
    </div>
  );
};

export default LeadsNotion;