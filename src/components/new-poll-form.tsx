import { Button, Box } from '@material-ui/core';
import { useState } from 'react';
import { createPoll } from '../services/polls';
import Router from 'next/router';

export const NewPollForm: React.FC = () => {
  const [creating, setCreating] = useState(false);

  const clickCreatePoll = async () => {
    setCreating(true);
    const poll = await createPoll();
    setCreating(false);
    Router.push(`/polls/${poll.id}`);
  };

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={clickCreatePoll}>
        Create a poll
      </Button>
    </Box>
  );
};
