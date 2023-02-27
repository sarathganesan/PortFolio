import React from 'react'
import './Testimonials.css'
import { Swiper,SwiperSlide } from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css'

const Testimonials = () => {
   
    const clients=[
        {
            img: profilePic1,
            review:
            "We re-did our website twice in a 12 month period. There was no comparison between the first company and Thrive. Professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with Thrive the first time I would not have had to do it twice."

            
        },{
            img:profilePic2,
            review:
            "With Thrive’s help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website! Thanks Thrive!"
        },{
            img:profilePic3,
            review:
            "It has been a pleasure working with Thrive. I appreciate your dedication to the projects that you and your team are on. It is nice from the customers stand point to be able to get in touch with you and your team and you guys always made yourselves available. You did a great job for us and I would recommend you to anyone."
        },{
            img:profilePic4,
            review:
            "Thank you so much for the report!  I think our ad campaign is performing extremely well and our calls and emails are flooding in.   I have referred a few others to you guys that have needed SEO work and website work generally. Our company wouldn’t be what it is without you guys.   Keep up the good work!"
        }
    ]
  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work</span>
            <span>from me</span>
            <div className="blur t-blur1 " style={{background: "var(--purple)"}} ></div>
            <div className="blur t-blur2 " style={{background:"skyblue"}} ></div>
        </div>
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        
        >
            {clients.map((client,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">

                        
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>

                    </SwiperSlide>
                )
            })}

        </Swiper>

    </div>
    
  )
}

export default Testimonials