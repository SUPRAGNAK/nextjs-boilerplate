export async function getServerSideProps({ query }) {
  const html = Buffer.from(query.data || "", "base64").toString("utf-8")

  return {
    props: { html }
  }
}

export default function Preview({ html }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}
