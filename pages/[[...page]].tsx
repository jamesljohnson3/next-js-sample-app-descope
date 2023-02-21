import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { BuilderComponent, Builder, builder } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export async function getStaticProps({ params }: GetStaticPropsContext<{ page: string[] }>) {
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params?.page?.join('/') || ''),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
    omit: 'data.blocks',
  });

  return {
    paths: pages.map(page => `${page.data?.url}`),
    fallback: true,
  };
}

export default function Page({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  const isLive = !Builder.isEditing && !Builder.isPreviewing;
  if (!page && isLive) {
    return (
      <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" /><NextSeo
      title='NB4F Shop'
      description='Merchandise, Fashion and more.'
      openGraph={{
        url: 'https://nb4fshop.com',
        title: 'NB4F Shop logo',
        description:
          'Merchandise, Fashion and more=',
        images: [
          {
            url: 'https://unlimitednow.live/ogimage.png',
            height: 600,
            width: 600,
            alt: 'nb4fshop',
          },
        ],
      }}
      twitter={{
        cardType: 'summary_large_image',
        handle: '@nb4fshop',
      }}
    />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  return (
    <>
             <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" /><NextSeo
      title='NB4F Shop'
      description='Merchandise, Fashion and more.'
      openGraph={{
        url: 'https://nb4fshop.com',
        title: 'NB4F Shop logo',
        description:
          'Merchandise, Fashion and more=',
        images: [
          {
            url: 'https://unlimitednow.live/ogimage.png',
            height: 600,
            width: 600,
            alt: 'nb4fshop',
          },
        ],
      }}
      twitter={{
        cardType: 'summary_large_image',
        handle: '@nb4fshop',
      }}
    />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <BuilderComponent model="page" content={page} />
    </>
  );
}
