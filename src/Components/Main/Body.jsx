import { useState } from "react"
import MovieCard from "./MovieCard"
import Sidebar from "./Sidebar"
import DetailsModal from "./DetailsModal";

function Body(){
    

  return (
    <>
        <section className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar/>
            <section className="content">
                
                    <MovieCard/>
                
            </section>

        </section>
    </>
  )
}

export default Body