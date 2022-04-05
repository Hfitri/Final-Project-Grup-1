function FormKonsultasi() {
    return (
        
        <div className="Konsultasi">
            <div class="flex justify-center">
            <div class="block rounded-lg shadow-lg bg-white max-w-md pl-36 pr-36 pt-6 pb-6">
            <form>
                <div class="form-group mb-6">
                <input type="text" class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                    placeholder="Nama"></input>
                </div>
                <div class="form-group mb-6">
                <input type="text" class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                    placeholder="Umur Kucing"></input>
                </div>
                <div class="form-group mb-6">
                <input type="text" class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                    placeholder="Nomor Telpon"></input>
                </div>
                <div class="form-group mb-6">
                <input type="email" class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                    placeholder="Email"></input>
                </div>
                <div class="form-group mb-6">
                <textarea
                class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Konsultasikan Permasalahan Kucing Anda "></textarea>
                </div>
                <button type="submit" class="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out">Send</button>
            </form>
</div>
</div>
    </div>
    )
}

export default FormKonsultasi;