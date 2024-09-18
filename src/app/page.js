import CardItem from "@/components/CardItem";
import { getAllCelebrations } from "../../lib/api";
import NavigationBar from "../components/NavigationBar";

export default async function Home() {
  const celebrations = await getAllCelebrations();
  return (
    <div>
      <NavigationBar />
      <div className="text-lg">Choose how to celebrate TODAY</div>
      <div class="grid lg:grid-cols-4">
        {celebrations.map((celebration) => (
          <div key={celebration.slug}>
            <CardItem title={celebration.title} image={celebration.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
