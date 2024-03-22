// 'use client'
import React from 'react';
import { Button } from "@/components/ui/button"
import { getEventId, deleteEvent } from '@/actions/event.action';

const SingleEventPage = async ({ params }: any) => {
  const { id } = params;
  const event = await getEventId(id);
  console.log(event);

  if (!event) {
    return <div>Loading...</div>;
  }

  const handleDelete = async () => {
    try {
      await deleteEvent(event.id);
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div>
      <div>ID: {event.id}</div>
      <div>Name: {event.name}</div>
      <div>Date: {event.date}</div>
      <div>Target Year: {event.target_year}</div>
      <div>Duration: {event.duration}</div>
      <div>Expected Participants: {event.expected_participants}</div>
      <div>Actual Participants: {event.actual_participants}</div>
      <div>Location: {event.location || "N/A"}</div>
      <div>Event Thumbnail: {event.event_thumbnail || "N/A"}</div>
      {/* <div>Created By: {event.created_by || "N/A"}</div>
      <div>Created At: {event.created_at.toString()}</div>
      <div>Updated At: {event.updated_at ? event.updated_at.toString() : "N/A"}</div> */}

      {/* <Button onClick={handleDelete}>Delete Event</Button> */}
      <Button>
        Update Event
      </Button>
    </div>
  );
};

export default SingleEventPage;
