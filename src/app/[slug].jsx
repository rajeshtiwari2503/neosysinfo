// src/app/[slug].js
export async function getStaticPaths() {
    return {
      paths: [], // No predefined paths
      fallback: 'blocking', // Show 404 if the page doesn't exist
    };
  }
  
  export async function getStaticProps({ params }) {
    const { slug } = params;
    const data = await fetchData(slug);
    if (!data) {
      return { notFound: true }; // Automatically trigger the 404 page
    }
  
    return { props: { data } };
  }
  