import Cover from "./components/Cover";
import Row from "./components/Row";

export default async function Home() {
  return (
    <main className="main pb-8">
      <Cover />
      <Row />
    </main>
  );
}
