import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Container from "@/components/content/container";
import H1 from "@/components/content/h1";
import styles from "@/styles/blog/[slug].module.scss";
import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "../api/wordpress";
import Head from "next/head";

export default function slug({ data }) {

    return (
        <>
            <Head>
                <title>{data.title} — Buscadog</title>
                <meta name="description" content={`${data.title} — Buscadog`} />
                <meta property="og:title" content={`${data.title} — Buscadog`} />
                <meta property="og:url" content={`https://buscadog.net/blog/${data.slug}`} />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Container fullscreen className={styles.root}>
                <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <Breadcrumbs />
                        <H1 className={styles.title}>{data.title}</H1>
                        <div>
                            <img src="/favicon.svg" />
                            <Link target="_blank" href="/">{data.author.node.name}</Link>
                        </div>
                    </div>
                    <img src={data.featuredImage.node.sourceUrl} />
                </div>
                <div className={styles.content}>
                    <div dangerouslySetInnerHTML={{ __html: data.content }} />
                </div>
            </Container>
        </>
    )
}

export const getStaticPaths = async () => {

    const allPosts = await getAllSlugs("blog");
    return {
        paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`),
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const data = await getPostBySlug("blog", context.params.slug)
    return {
        props: {
            data
        },
    };
}