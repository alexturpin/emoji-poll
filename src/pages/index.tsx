import { Layout } from '../components/layout';
import { Typography } from '@material-ui/core';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Typography variant="h2" component="h1" gutterBottom>
        Emoji Poll
      </Typography>
      <Typography component="p">Run quick polls with emoji.</Typography>
    </Layout>
  );
}
