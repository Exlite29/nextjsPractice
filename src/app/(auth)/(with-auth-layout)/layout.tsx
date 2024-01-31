import { Metadata } from "next";

export const metadata: Metadata = {
  title: "test metadata",
  description: "testing description",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Inner Layout</h2>
      {children}
    </div>
  );
}
