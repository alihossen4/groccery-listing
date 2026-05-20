import product1 from "../../public/beverages/beverage1.jpeg"
import product2 from "../../public/beverages/beverage2.jpg"
import product3 from "../../public/beverages/beverage3.jpg"
import LatestItem from "./LatestItem"
const LatestProduct = () =>{
    return(
        <section className="bg-white py-4">
            <div className="container">
                <div className="flex items-center justify-between ">
                    <div className="col1 w-[30%] my-3">
                        <h2 className="text-2xl text-gray-800 font-[600]">Latest Products</h2>
                        <p className="text-[16px]text-gray-800">Check out latest Products!</p>
                    </div>
                    <div className="col2 w-[70%]flex items-center justify-end">

                    </div>
                </div>
                <div className="flex gap-4 items-center justify-between">
                <LatestItem image={product3} price={"$2.00"} oldPrice={"$3.00"}/>
                <LatestItem image={product3} price={"$2.00"} oldPrice={"$3.00"}/>
                <LatestItem image={product3} price={"$2.00"} oldPrice={"$3.00"}/>
                <LatestItem image={product3} price={"$2.00"} oldPrice={"$3.00"}/>
                <LatestItem image={product3} price={"$2.00"} oldPrice={"$3.00"}/>
                <LatestItem image={product3} price={"$2.00"} oldPrice={"$3.00"}/>
                <LatestItem image={product3} price={"$2.00"} oldPrice={"$3.00"}/>
            </div>
            </div>
        </section>
    )
}
export default LatestProduct;