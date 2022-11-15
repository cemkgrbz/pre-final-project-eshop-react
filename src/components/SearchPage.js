import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import { Link } from "react-router-dom";

function SearchPage() {

    const {state, products} = useContext(Context)

    const results = products.filter(item => item.title.toLowerCase().includes(state.searchText.toLowerCase()))

    return (  
        <div>
            {
                results.map((item, idx) => (
                  <Link to={`/singleProduct/${item.id}`}>
                  <div
                    key={idx}
                    className="flex items-center gap-4 m-auto border-2 w-[50%] my-8 relative"
                  >
                    <img src={item.images} alt="" className="w-[12rem]" />
                    <div className="flex justify-between m-2 w-[100%]">
                      <div>{item.title}</div>
                      <div> Price: {item.price}€</div>
                    </div>
                  
                    
                  </div></Link>
                ))}
        </div>
    );
}

export default SearchPage;