import carsData from "../data/carsData";
import SearchBar from "../components/module/SearchBar";
import Categories from "../components/module/Categories";
import CarsPage from "../components/templates/carsPage";
import AllButton from "../components/module/AllButton";

export default function Home() {

  const cars = carsData.slice(0,3);
    return (
    <div >
           <SearchBar/>
            <Categories/>
           <AllButton/>
           <CarsPage data={cars}/>
    </div>
  )
}
