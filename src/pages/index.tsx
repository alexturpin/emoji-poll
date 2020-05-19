import { Layout } from '../components/layout';
import { Typography } from '@material-ui/core';
import { NewPollForm } from '../components/new-poll-form';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Typography variant="h2" component="h1" gutterBottom>
        Emoji Poll
      </Typography>
      <Typography component="p" gutterBottom>
        Run quick polls with emoji.
      </Typography>

      <NewPollForm />
    </Layout>
  );
}
