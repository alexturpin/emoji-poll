import Head from 'next/head';
import { Container } from '@material-ui/core';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <Container maxWidth="md">
      <Head>
        <title>Emoji Poll{title && `: ${title}`}</title>

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      {children}
    </Container>
  );
};
