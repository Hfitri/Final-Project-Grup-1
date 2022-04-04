import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";


export default function Artikel() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div class="box-content h-200 w-60 p-4 border-4 bg-blue-500 ...">
        <Card>
            <CardImage
                src="https://d1bpj0tv6vfxyp.cloudfront.net/articles/758149_25-1-2021_13-8-13.jpeg"
                alt="Card Image"
            />

            <CardBody>
                <H6 color="gray">Kenali kebiasaan kucing anda</H6>
                <Paragraph color="gray">
                Kucing merupakan hewan yang memiliki banyak kelebihan. Bulunya lembut, bentuk tubuhnya menggemaskan. Sifatnya yang manja selalu ingin mengelus dan bermain dengannya. Sifat atau watak setiap hewan kesayangan berbeda-beda. Hal itu tergantung dari pribadi hewan itu sendiri atau jenisnya. Selain itu, Anjing dan kucing memiliki perilaku dan kebiasaan yang perlu diperhatikan. Beberapa diantaranya adalah sebagai berikut:
                </Paragraph>
            </CardBody>

            <CardFooter>
            <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalLg">Selengkapnya</button>
            <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalLg" tabindex="-1" aria-labelledby="exampleModalLgLabel" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLgLabel">
          
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
      1. Menandai wilayah dengan urinasi (spraying)
      Kegiatan spraying rutin dilakukan kucing setiap hari pada kucing jantan yang berumur 8-9 bulan dan anjing sejak berumur 6 bulan. Saat itu anjing dan kucing telah dewasa kelamin. Urin mengandung hormon feromon yang beraroma khas sehingga menjadi media komunikasi. Kucing menandai teritorialnya dengan tiga cara, yaitu sebagai berikut

      ~ Kucing akan mengencingi tempat-tempat tertentu sebagai bagian dari wilayahnya.
      ~ Kucing menggores dengan cakarnya
      ~ Kucing mengusapkan kepalanya pada benda padat yang akan menyalurkan bau dari kelenjar kulitnya.

      2. Menggaruk
      Kucing mempunyai kebiasaan menggaruk apa saja yang dijumpainya. Jadi, jangan heran bila daun pintu, lemari, sofa, atau karpet menjadi rusak akibat ulahnya. Kadang batang pohon pun digaruknya. Perilaku ini muncul sejak kecil sebagai sarana memotong kukunya.
      3. Muntah
     Kucing muntah untuk mengeluarkan gumpalan bulu dari perutnya. Bulu-bulu itu tertelan sewaktu kucing menjilati bulunya. Bulu-bulu tersebut tidak dapat tercerna di dalam perut sehingga menggumpal menjadi bola bulu (hair ball). Untuk merangsang kucing muntah, biasanya kucing memakan rumput.
      4. Menggali
      Kucing dan anjing gemar menggali tanah atau pasir. Ia selalu mengorek-korek tanah dan pasir dengan kakinya. Kebiasaan itu muncul ketika selesai berurin (buang air kecil) atau membuang feses. Maksudnya agar aroma tidak tercium.
      5. Mencuri
       Kucing memiliki kebiasaan buruk, yaitu mencuri. Kenapa? Karena kucing termasuk hewan cerdik. Bisa juga karena kucing kelaparan. Ia bisa membuka tudung saji atau lemari makan. Kalau salah asuh, kucing bias bertindak “kriminal” dengan mencuri lauk-pauk di meja makan. Kalau dididik secara benar, kucing pun bisa santun. Kuncinya, jangan terlalu dimanja, jangan pula kurang kasih sayang.
 


     </div>
    </div>
  </div>
</div>
            </CardFooter>
        </Card>
        
        </div>
        
    );
}
