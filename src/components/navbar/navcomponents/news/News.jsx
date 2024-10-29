import React from 'react'
import './News.css'
import Header from '../../../Header/Header'
import news from '../../../../assets/news.webp'
import Nimg1 from '../../../../assets/img_1.jpg.webp'
import Nimg2 from '../../../../assets/img_2.jpg.webp'
import Nimg3 from '../../../../assets/img_3.jpg.webp'
import Footer from '../../../footer/Footer'




const News = () => {
  return (
    <div className='news'>
        
   
       
        <div className="H-main" style={{ backgroundImage: `url(${news})` }}
    
    >

        <Header/>
        <div className="hero"  >

            <div className="Htext">
                <h1>Blogs</h1>
           
                <h3>A free template by <a href="#" target='blank'>Colorlib</a> Download and share!</h3>      
            </div>
        </div>
        </div>
 {/* //////////////////////////////////////// */}
    <div className="navnews">
        <div className="con1">

        <div className="conItem1">
            
        <div className="items">
                <div className="Abitem">
                    <div className="navicon"><img src={Nimg1} alt="" /></div>
                    <h3>CEO, Co-Founder</h3>
                    <h1>Vince Richardson</h1>
                 
                 
                </div>
                <div className="Abitem">
                    <div className="navicon"><img src={Nimg2} alt="" /></div>
                    <h3>CTO, Co-Founder</h3>
                    <h1>Jean Love</h1>
                </div>
                
                </div>
</div>

        <div className="conItem1">
            
        <div className="items">
                <div className="Abitem">
                    <div className="navicon"><img src={Nimg1} alt="" /></div>
                    <h3>CEO, Co-Founder</h3>
                    <h1>Vince Richardson</h1>
                 
                 
                </div>
                <div className="Abitem">
                    <div className="navicon"><img src={Nimg2} alt="" /></div>
                    <h3>CTO, Co-Founder</h3>
                    <h1>Jean Love</h1>
                </div>
                
                </div>
</div>

        <div className="conItem1">
            
        <div className="items">
                <div className="Abitem">
                    <div className="navicon"><img src={Nimg1} alt="" /></div>
                    <h3>CEO, Co-Founder</h3>
                    <h1>Vince Richardson</h1>
                 
                 
                </div>
                <div className="Abitem">
                    <div className="navicon"><img src={Nimg2} alt="" /></div>
                    <h3>CTO, Co-Founder</h3>
                    <h1>Jean Love</h1>
                </div>
                
                </div>
</div>
        </div>
        {/* //////////////////////////////////// */}
        <div className="con2">
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="news-post">

                <h1>Popular Post</h1>
                <div className="post-items">

                    <div className="img"> <img src={Nimg1} alt="" /> </div>
                    <div className="text"> 
                        <h3>February 27,2018</h3>
                        <h1>Free Template by Colorib</h1>
                    </div>
                </div>
                <div className="post-items">

                    <div className="img"> <img src={Nimg2} alt="" /> </div>
                    <div className="text"> 
                        <h3>February 27,2018</h3>
                        <h1>Free Template by Colorib</h1>
                    </div>
                </div>
                <div className="post-items">

                    <div className="img"> <img src={Nimg1} alt="" /> </div>
                    <div className="text"> 
                        <h3>February 27,2018</h3>
                        <h1>Free Template by Colorib</h1>
                    </div>
                </div>
                <div className="post-items">

                    <div className="img"> <img src={Nimg2} alt="" /> </div>
                    <div className="text"> 
                        <h3>February 27,2018</h3>
                        <h1>Free Template by Colorib</h1>
                    </div>
                </div>
                <div className="post-items">

                    <div className="img"> <img src={Nimg3} alt="" /> </div>
                    <div className="text"> 
                        <h3>February 27,2018</h3>
                        <h1>Free Template by Colorib</h1>
                    </div>
                </div>
                
                
            </div>
      <div className="categories">
        <h1>Categories</h1>
        <div className="events">
            <div className="event1">
                <span>Events</span>
                <span>(12)</span>
            </div>
            <hr />
            <div className="event1">
                <span>Resto bar</span>
                <span>(4)</span>
            
            </div>
            <hr />
            <div className="event1">
                <span>Celebration</span>
                <span>(23)</span>


            </div>
            <hr />
            <div className="event1">
                <span>Promos</span>
                <span>(8)</span>
             
             
            </div>
           
           
        </div>
      </div>




        </div>
    </div>
    <Footer/>
 </div>
    
  )
}

export default News
