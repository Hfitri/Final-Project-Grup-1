import Artikel from "../component/Artikel";
import H3 from "@material-tailwind/react/Heading3";
import NewsModal from "../component/NewsModal";

function News() {
    return (
        <div class="container mx-auto pb-24 px-24 ">
            <div class="pt-32 pb-10 text-center text-cyan-500">
                <H3 color="indigo">
                    Artikel Tentang Kucing
                </H3>
            </div>
            <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-28">
                <Artikel />
                <Artikel />
                <Artikel />
                <Artikel />
                <Artikel />
                <Artikel />
                <Artikel />
                <Artikel />
            </div>
            <NewsModal />

        </div >
    )

}

export default News;