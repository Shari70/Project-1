import React from 'react'
import './Contact.css'
import Header from '../../../Header/Header'
import ContactImg from '../../../../assets/slider-3.jpg.webp'
import sec4img1 from '../../../../assets/person_1.webp'
import sec4img2 from '../../../../assets/person_2.webp'
import sec4img3 from '../../../../assets/person_3.webp'
import Footer from '../../../footer/Footer'

const Contact = () => {
  return (
    
    <div className="contact">
        
    <div className="H-main" style={{ backgroundImage: `url(${ContactImg})` }}
    
    >

        <Header/>
        <div className="hero"  >

            <div className="Htext">
                <h1>Contact</h1>
           
                <h3>A free template by <a href="#" target='blank'>Colorlib</a> Download and share!</h3>
                     
            </div>
        </div>
        </div>
        {/* ////////////////////////////////////// */}

        <div className="ContactSec">
            

        <div className="leftBox">
        <div className="form-container">
        
        
            <form>
                <div className="input-group">
                    <div className="input-container">
                        <label>
                            Name:
                            <input type="text" className="input-style" required />
                        </label>
                    </div>
                    <div className="input-container">
                        <label>
                            Phone:
                            <input type="tel" className="input-style" required />
                        </label>
                    </div>
                </div>
                <div className="input-container">
                    <label>
                        Email:
                        <input type="email" className="input-style" required />
                    </label>
                </div>
                <div className="input-container">
                    <label>
                        Message:
                        <textarea className="input-style" style={{ height: '150px' }} required></textarea>
                    </label>
                </div>
                <button type="submit" className="button-style">Submit</button>
            </form>
        </div>

            

            
        </div>
        <div className="Rightbox">
            <h5>ADDRESS:</h5>
            <h1>98 West 21th Street, Suite</h1>
            <h1>721 New York NY 10016</h1>
            <h5>Phone:</h5>
            <h1>(+1) 435 3533</h1>
            <h5>Email:</h5>
            <h1>info@yourdomain.com</h1>

        </div>
        </div>


{/* ///////////////////////////////////////////// */}
<div className="section4">


<div className="heading">
    <h1>Happy Customers</h1>


</div>


<div className="items1">
    <div className="item">
        <div className="icon"><img src={sec4img1} alt="" /></div>
        <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
        </p>


        <h4>— Clare Gupta</h4>

    </div>
    <div className="item">
        <div className="icon"><img src={sec4img2} alt="" /></div>
        <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
        </p>


        <h4>— Rogie Slater</h4>

    </div>
    <div className="item">
        <div className="icon"><img src={sec4img3} alt="" /></div>
        <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
        </p>


        <h4>— John Doe</h4>

    </div>
  
  

</div>
</div>


   <Footer/>

        </div>
  )
}

export default Contact
