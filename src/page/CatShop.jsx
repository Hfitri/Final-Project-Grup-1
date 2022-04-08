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
        <div class="flex space-x-2 justify-center">
          <SearchShop />
          <a href="checkout">
            <img class="mt-12" style={{ width: 50, height: 50 }} src={require("../assets/Cart.png")} alt="" />
          </a>
          <span style={{ width: 40, height: 25 }} class="inline-block mt-14 pt-1 px-1.5 leading-none text-center  font-bold bg-red-600 text-white rounded ml-2">
            0
          </span>

        </div>

        <div class="grid pt-6 lg:grid-cols-3 sm:grid-cols-2 gap-8">
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
