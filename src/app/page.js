import CardItem from "@/components/CardItem";
import { getAllCelebrations } from "../../lib/api";
import NavigationBar from "../components/NavigationBar";
import MainText from "../components/MainText";

export default async function Home() {
  const celebrations = await getAllCelebrations();
  return (
    <div>
      <NavigationBar />
      <MainText />
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
