function CardCheckout() {
    return (
        <>
            <>
                <div class="flex justify-center pb-6">
                    <div class="flex justify-center flex-col md:flex-row rounded-lg bg-white shadow-lg">
                        <img
                            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                            src="https://images.tokopedia.net/img/cache/250-square/hDjmkQ/2022/4/2/95e40ba4-62ba-4b7e-828d-ea1762b1f917.jpg.webp?ect=4g"
                            alt=""
                        />
                        <h5 class="text-gray-900 text-xl font-medium my-20 mx-6 mb-2">Antibiotik</h5>
                        <button
                            type="button"
                            class="inline-block px-6 mx-6 py-2.5 my-20 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            -
                        </button>
                        <button
                            type="button"
                            class="inline-block px-6 mx-2 py-2.5 my-20 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition"
                        >
                            +
                        </button>
                        <h5 class="text-gray-900 text-xl font-medium my-20 mx-6 mb-2">1</h5>
                        <h5 class="text-gray-900 text-xl font-medium my-20 mx-6 mb-2">75000</h5>
                    </div>
                </div>
            </>
        </>
    )
}

export default CardCheckout;