import Config from "@/config";

export default async function Head({ params }) {
  return (
    <>
      <title>
        {`${Config?.constants?.meta?.name} - ${Config?.constants?.meta?.slogan}`}
      </title>

      {/* Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={Config?.constants?.meta?.description} />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      {/* Twitter */}
      <meta name="twitter:site" content={Config?.social?.twitter} />
      <meta
        name="twitter:title"
        content={`${Config?.constants?.meta?.name} - ${Config?.constants?.meta?.slogan}`}
      />
      <meta
        name="twitter:description"
        content={Config?.constants?.meta?.description}
      />
      <meta name="twitter:image" content="/api/og" />
      <meta name="twitter:creator" content={Config?.social?.twitter} />

      {/* LinkedIn & Facebook */}
      <meta property="og:url" content={Config?.url} />
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content={`${Config?.constants?.meta?.name} - ${Config?.constants?.meta?.slogan}`}
      />
      <meta
        property="og:description"
        content={Config?.constants?.meta?.description}
      />
      <meta property="og:image" content="/api/og" />
      <meta
        property="description"
        content={Config?.constants?.meta?.description}
      />
    </>
  );
}
