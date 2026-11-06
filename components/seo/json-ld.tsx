type TJsonLdData = Record<string, unknown> | Record<string, unknown>[];

export const JsonLd = ({ data }: { data: TJsonLdData }) => {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
};
