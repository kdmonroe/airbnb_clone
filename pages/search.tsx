import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {format} from "date-fns"

function Search(){
    const router = useRouter();
    // ES6 Destructuring 
    const {location, startDate, endDate, noOfGuests} = router.query; 

    // format start and end dates 
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy"); 
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy"); 
    const range = `${formattedStartDate} - ${formattedEndDate}`; 

    console.log(noOfGuests)

    return(
        <div className="h-screen">
            <Header/>
                <main className="flex">
                    <section className="flex-grow pt-14 px-6">
                        <p className="text-xs">300+ Stays - {range} -  for {noOfGuests} guests </p>
                        <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                            <p className="button">Cancellation Flexibility</p>
                            <p className="button">Type of Place</p>
                            <p className="button">Price</p>
                            <p className="button">Rooms and Beds</p>
                            <p className="button">More filters</p>
                        </div>
                    </section>
                </main>
            <Footer/>
        </div>
    )
}

export default Search;