import imageURL from "../../../public/Scripts/imageURL"
import star from "../../assets/star.svg"

function Rating({rating}) {
  const stars = Array(rating).fill(star)
    return (
    <>
        {
            stars.map((star,index)=><img key={index} src={star} width='14' height='14' alt='star' />)
        }
    </>
  )
}

export default Rating