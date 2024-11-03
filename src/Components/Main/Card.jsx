import { useContext, useState } from "react";
import imageURL from "../../../public/Scripts/imageURL"
import DetailsModal from "./DetailsModal";
import Rating from "./Rating"
import { MovieContext } from "../../../public/Scripts/context";
import { notify } from "../../../public/Scripts/toastify";

function Card({movie}) {

    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    const {state,dispatch} = useContext(MovieContext);

    

    function handleModal(data){
        console.log(data);
        setModalData(data);
        setShowModal(true);
    }

    function handleModalClose(){
        setShowModal(false)
        setModalData(null);
    }

    function handleAddToCart(e,movie){
            e.stopPropagation();
            const isExisted = state.cartData.some(data => data.id === movie.id);
            if(isExisted){
                notify('error',`${movie.title} Already Existed`);
            }else{
              notify('success',`${movie.title} added to the Cart`);
                dispatch({
                  type:"add_to_cart", 
                  payload:{
                    ...movie
                  }
                })
            }
        }
    

  return (
    <>
    {
        showModal && modalData && <DetailsModal movie={modalData} onClose={handleModalClose} handleAddToCart={handleAddToCart}/>
    }
    
        <figure onClick={()=>handleModal(movie)} className='p-4 cursor-pointer border border-black/10 shadow-sm dark:border-white/10 rounded-xl'>
            
            <figure className="w-[354px] h-[522px] ">
            <img className='w-full h-full object-cover object-center' src={imageURL(movie.cover)} alt='' />
            </figure>
            <figcaption className='pt-4'>
              <h3 className='text-xl mb-1'>{movie.title}</h3>
              <p className='text-[#575A6E] text-sm mb-2'>
                {movie.genre}
              </p>
              <div className='flex items-center space-x-1 mb-5'>
                <Rating rating={movie.rating}/>
              </div>
              <a
                onClick={(e)=>handleAddToCart(e,movie)}
                className='bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm'
                href='#'>
                <img src='./assets/tag.svg' alt='' />
                <span>${movie.price} | Add to Cart</span>
              </a>
            </figcaption>
            
          </figure>
    </>
  )
}

export default Card