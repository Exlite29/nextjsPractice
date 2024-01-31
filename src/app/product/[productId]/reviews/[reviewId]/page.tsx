import { notFound } from "next/navigation";

export default function reviewPage({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (parseInt(params.reviewId) > 1) {
    notFound();
  }
  return (
    <h1>
      Product Page {params.productId} review site {params.reviewId}
    </h1>
  );
}
