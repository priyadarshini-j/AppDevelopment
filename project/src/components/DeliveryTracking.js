import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Typography, Box, Paper, Button } from '@mui/material';

const DeliveryTracking = () => {
  return (
    <Timeline position="alternate" sx={{ padding: 0 }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ textAlign: 'center' }}>
          <Typography variant="body2">Order Confirmed</Typography>
          <Typography variant="caption">Sat, 27th Apr</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ textAlign: 'center' }}>
          <Typography variant="body2">Shipped</Typography>
          <Typography variant="caption">Sat, 27th Apr</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ textAlign: 'center' }}>
          <Typography variant="body2">Out for delivery</Typography>
          <Typography variant="caption">Tue, 30th Apr</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent sx={{ textAlign: 'center' }}>
          <Typography variant="body2">Delivered</Typography>
          <Typography variant="caption">Tue, 30th Apr</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default DeliveryTracking;
