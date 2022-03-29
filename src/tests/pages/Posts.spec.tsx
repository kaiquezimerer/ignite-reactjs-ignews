import { render, screen } from '@testing-library/react';

import { stripe } from '../../services/stripe';
import Posts, { getStaticProps } from '../../pages/posts';
import { getPrismicClient } from '../../services/prismic';

jest.mock('next/router');
jest.mock('next-auth/react', () => {
  return {
    useSession: () => [null, false]
  };
});
jest.mock('../../services/stripe');

jest.mock('../../services/prismic');

const posts = [
  { slug: 'my-new-post', title: 'My News Post', excerpt: 'Post exerpt', updatedAt: 'March, 10' }
];

describe('Posts page', () => {
  it('renders correctly', () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText('My News Post')).toBeInTheDocument();
  });

  it('loads initial data', async () => {
    const getPrismicCientMocked = jest.mocked(getPrismicClient);

    getPrismicCientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: 'my-new-post',
            data: {
              title: [
                { type: 'heading', text: 'My new post' }
              ],
              content: [
                { type: 'paragraph', text: 'Post excerpt' }
              ],
            },
            last_publication_date: '04-01-2021',
          }
        ]
      })
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [{
           slug: 'my-new-post',
           title: 'My new post',
           excerpt: 'Post excerpt',
           updatedAt: '01 de abril de 2021' 
          }]
        }
      })
    )
  });
});
