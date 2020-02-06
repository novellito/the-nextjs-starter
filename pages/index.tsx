import Head from 'next/head';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Hello = styled.h1`
  color: teal;
  font-size: 50px;
`;

export const Index = () => {
  return (
    <>
      <Head>
        <title>Next.js boilerplate</title>
        <meta name="description" content="a nextjs starter boilerplate" />
      </Head>
      <Hello>Hello World!</Hello>
      <Link href="/counter">
        <button>
          <FontAwesomeIcon icon={faThumbsUp} /> Go to counter
        </button>
      </Link>
    </>
  );
};

export default Index;
