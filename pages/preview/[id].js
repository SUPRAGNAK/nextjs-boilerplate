export async function getServerSideProps({ query }) {
  if (!query.data) {
    return { notFound: true };
  }

  const html = Buffer.from(query.data, "base64").toString("utf-8");

  return {
    props: { html }
  };
}

export default function PreviewPage({ html }) {
  return (
    <iframe
      srcDoc={html}
      style={{
        width: "100%",
        height: "100vh",
        border: "none"
      }}
    />
  );
}
