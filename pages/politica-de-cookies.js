import { getPageById } from './api/wordpress';

export default function PoliticaDeCookies({data}) {

    return (
        <>
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </>
    )
}

export async function getServerSideProps() {

    const data = await getPageById(14);

    return {
        props: { data }
    }
}