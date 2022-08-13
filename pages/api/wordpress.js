const API_URL = process.env.WP_API_URL;

async function fetchAPI(query, { variables } = {}) {
    // Set up some headers to tell the fetch call
    // that this is an application/json type
    const headers = { 'Content-Type': 'application/json' };

    // build out the fetch() call using the API_URL
    // environment variable pulled in at the start
    // Note the merging of the query and variables
    const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables })
    });

    // error handling work
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        console.log('error details', query, variables);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}

export async function getAllPosts(preview) {
    const data = await fetchAPI(
        `
      query AllPosts {
        posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
          edges {
            node {
              id
              date
              title
              slug
              extraPostInfo {
                authorExcerpt
                thumbImage {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
      `
    );

    return data?.posts;
}

export async function getPageById(id) {

    const data = await fetchAPI(
        `
        query NewQuery {
            page(id: "${id}", idType: DATABASE_ID) {
              title
              content
            }
          }
        `
    )

    return data.page;
}