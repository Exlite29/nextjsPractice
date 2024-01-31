export default function productDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1> Details about products {params.productId}</h1>;
}
