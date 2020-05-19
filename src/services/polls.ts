export interface Poll {
  id: string;
}

export const createPoll = async (): Promise<Poll> => {
  const res = await fetch('/api/polls', { method: 'POST' });
  const poll: Poll = await res.json();

  return poll;
};
