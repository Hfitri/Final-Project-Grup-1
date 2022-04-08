import Artikel from "../component/Artikel";
import H3 from "@material-tailwind/react/Heading3";
import NewsModal from "../component/NewsModal";
import datas from '../data-news'

function News() {

    return (
        <>
            <div class="container mx-auto pb-24 px-24 ">
                <div class="pt-32 pb-10 text-center text-cyan-500">
                    <H3 color="indigo">
                        Artikel Tentang Kucing
                    </H3>
                </div>
                <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-28">

                    {datas.map((data) => (
                        <>
                            <div
                                key={data.id}>
                                <Artikel title={data.title} url={data.url} />
                            </div>
                            <NewsModal key={data.id} title={data.title} deskripsi={data.deskripsi} />
                        </>
                    ))}

                </div >
            </div>
        </>
    )
}

export default News;