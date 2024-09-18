import CardItem from "@/components/CardItem";
import { getAllCelebrations } from "../../lib/api";
import NavigationBar from "../components/NavigationBar";

export default async function Home() {
  const celebrations = await getAllCelebrations();
  return (
    <div>
      <NavigationBar />
      <div className="text-lg">Choose how to celebrate TODAY</div>
      <h6>Hello world</h6>
      <h1>Hello world</h1>
      {celebrations.map((celebration) => (
        <div key={celebration.slug}>
          <CardItem />
        </div>
      ))}
    </div>
  );
}
