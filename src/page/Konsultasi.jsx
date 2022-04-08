import FormKonsultasi from "../component/FormKonsultasi";
import TitleKonsultasi from "../component/TitleKonsultasi";

function Konsultasi(){
    return(
        <>
        <div class="pt-44 pb-10">
        <TitleKonsultasi/>
        <FormKonsultasi/>
        <div class="max-w-screen bg-gradient-to-r from-blue-400 to-violet-500">
                <p class="
                    text-2l 
                    text-yellow-200
                    font-bold 
                    tracking-[.05em] 
                    text-center">Semakin mudah untuk konsultasi secara online dengan dokter hewan kami, Sekarang anda hanya perlu kunjungi  </p>
                <p class="text-2xl font-bold text-center text-pink-700">LOVELY CAT!</p>
                <p class="text-center text-yellow-200">Mudah, Aman, Terpercaya Untuk memberikan pertolongan pada hewan yang sakit,
                    Salah satu caranya kalian bisa melakukan</p>
                <p class="text-2xl font-bold text-center text-yellow-200 ">"KONSULTASI SECARA ONLINE DENGAN DOKTER HEWAN LOVELY CAT"</p>
        </div>
        <div class="max-w-screen h-px ">
            <p class="text-3xl font-bold text-center text-pink-700 bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-pink-200 hover:to-yellow-200"> GRATIS!!!   GRATIS!!    GRATIS!!    GRATIS!!</p>
        </div>
        </div>
       
        </>
    )
}

export default Konsultasi;