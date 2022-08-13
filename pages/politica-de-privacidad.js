import { getPageById } from './api/wordpress';

export default function PoliticaDePrivacidad({data}) {

    return (
        <>
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </>
    )
}

export async function getServerSideProps() {

    const data = await getPageById(10);

    return {
        props: { data }
    }
}