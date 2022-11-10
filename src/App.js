import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <div className="h-[100vh] relative">
      <Header />
      <div>
        <div className="w-[65%] h-[15rem] border-2 text-center m-auto mt-10">Main Category</div>
        <div className="flex justify-center mb-3 mt-4 gap-10 ">
          <div className="border-2 h-[15rem] w-[20%] ml-4">subcategory</div>
          <div className="border-2 h-[15rem] w-[20%]">subcategory</div> 
          <div className="border-2 h-[15rem] w-[20%] mr-4">subcategory</div>
        </div>
      </div>
      <div className="flex w-[70%] justify-center m-auto gap-5 flex-wrap mb-10">
        <div className="w-[22%] h-[10rem] border-2">Products</div>
        <div className="w-[22%] h-[10rem] border-2">Products</div>
        <div className="w-[22%] h-[10rem] border-2">Products</div>
        <div className="w-[22%] h-[10rem] border-2">Products</div>
        <div className="w-[22%] h-[10rem] border-2">Products</div>
        <div className="w-[22%] h-[10rem] border-2">Products</div>
        <div className="w-[22%] h-[10rem] border-2">Products</div>
        <div className="w-[22%] h-[10rem] border-2">Products</div>
      </div>


      <Footer />
    </div>
  );
}

export default App;
