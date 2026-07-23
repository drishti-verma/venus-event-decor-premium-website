import { notFound } from "next/navigation";
import RoutePage from "../components/RoutePage";
import { routePages } from "../data";

export function generateStaticParams() {
  return Object.keys(routePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = routePages[slug];
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
    },
  };
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  const page = routePages[slug];
  if (!page) notFound();

  return <RoutePage page={page} />;
}
