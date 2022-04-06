import CardShop from "../component/CardShop";
import SearchShop from "../component/SearchShop";
import H3 from "@material-tailwind/react/Heading3";


function CatShop() {
  return (
    <div>
      <div class="container mx-auto pb-24 px-24 ">
        <div class="pt-32 text-center text-cyan-500">
          <H3 color="indigo">
            Cat Shop
          </H3>
        </div>
        <SearchShop />
        <div class="grid pt-6 lg:grid-cols-3 sm:grid-cols-2 gap-8">
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
        </div>
      </div>
    </div>

  );
}

export default CatShop;
