export async function action() {
    console.log("here")
    return new Response(`%PDF-1.0
  1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj 2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj 3 0 obj<</Type/Page/MediaBox[0 0 3 3]>>endobj
  xref
  0 4
  0000000000 65535 f
  0000000010 00000 n
  0000000053 00000 n
  0000000102 00000 n
  trailer<</Size 4/Root 1 0 R>>
  startxref
  149
  %EOF`, {
          status: 200,
          headers: {
              "Content-Type": "application/pdf",
              "Content-Disposition": `attachment; filename="contract-de-vente.pdf"`,
          },
    });
  }