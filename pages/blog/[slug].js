import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Head from "next/head";
import renderHTML from "react-render-html";
// import "./Blog.css"

const Slug = ({ items }) => {
  const router = useRouter();
  console.log(items);
  return (
    <>
      <Head>
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="https://mypremierpain.com/cms/includes/d8dg7zsf35v.2203240648002.css"
          data-require='["cms","cms-behave"]'
        /> */}
        <title>{items[0].title.rendered}</title>
        <meta
          name="description"
          content={items[0].yoast_head_json.description}
        />
        <link rel="canonical" href={items[0].yoast_head_json.canonical} />
        <meta
          property="og:locale"
          content={items[0].yoast_head_json.og_locale}
        />
        <meta property="og:type" content={items[0].yoast_head_json.og_type} />
        <meta property="og:title" content={items[0].yoast_head_json.og_title} />
        <meta
          property="og:description"
          content={items[0].yoast_head_json.og_description}
        />
        <meta property="og:url" content={items[0].yoast_head_json.og_url} />
        <meta
          property="og:site_name"
          content={items[0].yoast_head_json.og_site_name}
        />
        <meta
          property="article:published_time"
          content={items[0].yoast_head_json.article_published_time}
        />
        <meta
          property="og:image"
          content={items[0].yoast_head_json.og_image[0].url}
        />
        <meta
          property="og:image:width"
          content={items[0].yoast_head_json.og_image[0].height}
        />
        <meta
          property="og:image:height"
          content={items[0].yoast_head_json.og_image[0].width}
        />
        <meta
          property="og:image:type"
          content={items[0].yoast_head_json.og_image[0].type}
        />
        <meta name="author" content={items[0].yoast_head_json.author} />
        <meta
          name="twitter:card"
          content={items[0].yoast_head_json.twitter_card}
        />
      </Head>

      <Header />

      <main className="main">
        <p
          style={{
            border: "1px solid #003062",
            padding: "10px",
            margin: "35px 0px 35px 0px",
          }}
        >
          / Blog / {items[0].title.rendered}
        </p>

        <div
          style={{
            backgroundImage: `url(${items[0].yoast_head_json.og_image[0].url})`,
            backgroundSize: "contain",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            padding: "6vw",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "#fff" }}>{items[0].title.rendered}</h1>
        </div>
      </main>

      <div className="main" id="renderHTMl">{renderHTML(`${items[0].content.rendered}`)}</div>

      <Footer />
    </>
  );
};

export default Slug;

export const getServerSideProps = async ({ query: { slug } }) => {
  const posts = await axios.get(
    `https://www.mypremierpain.com/wp-json/wp/v2/posts?slug=${slug}`
  );
  const data = await posts.data;

  return {
    props: {
      items: data,
    }, // will be passed to the page component as props
  };
};
