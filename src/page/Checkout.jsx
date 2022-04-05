import CardCheckout from "../component/CardCheckout";
import TopCheckout from "../component/TopCheckout";

function Checkout() {
    return (
        <>
            <div class="pt-44 pb-10">
                <TopCheckout />
                <CardCheckout />
            </div>
        </>
    )

}

export default Checkout;