import { getDocuments } from "@/lib/doc";

export default function Home() {
  getDocuments();
  return <div>Landingn page</div>;
}
