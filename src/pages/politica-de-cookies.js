// import { getPageById } from './api/wordpress';

// export default function PoliticaDeCookies({ data }) {

//     return (
//         <section
//             style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 padding: "0 3rem"
//             }}>
//             <h1 style={{
//                 textAlign: "center",
//                 fontSize: "4rem"
//             }}>{data.title}</h1>
//             <div style={{
//                 maxWidth: "1020px"
//             }}
//                 dangerouslySetInnerHTML={{ __html: data.content }} />
//         </section>
//     )
// }

// export async function getStaticProps() {

//     const data = await getPageById(14);

//     return {
//         props: { data }
//     }
// }