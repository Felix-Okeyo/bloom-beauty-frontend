import React from 'react';
import './/NavBar.css'
import Image2 from './images/Image2.jpeg';
import Image6 from './images/Image6.jpg';
import Image5 from './images/Image5.jpg';
function About(){
    return (
        <>
        <div className="sec1">
            <div id='imag'>
                <img src={Image2} alt="image1" />
            </div>
            <div id='txt'>
                <p><h4>Welcome to Bloom Beauty- Your One-Stop Destination for All Things Beauty!</h4><br></br>

At Bloom Beauty, we believe that beauty is more than skin deep.
 It's about confidence, self-expression, and feeling your best. That's why 
 we've dedicated ourselves to providing a curated selection of high-quality 
 beauty products and exceptional services to help you look and feel fabulous every day.</p>
            </div>
        </div>
        <div className="sec2">
            <div id='imag1'>
            <img src={Image6} alt="image6" />
            </div>
            <div id='txt1'>
                <p><h4>What Sets Us Apart</h4>

Curated Selection: We handpick every product in our store to ensure you have access to the latest trends, top-quality brands, and time-tested classics.

Expert Advice: Our team of beauty experts is always ready to help you find the perfect products for your unique needs and provide tips and advice for achieving your desired look.

Customer-Centric Approach: Your satisfaction is our priority. We take pride in offering exceptional customer service and a seamless shopping experience.

Community Engagement: We believe in giving back to the community. [Describe any community involvement or initiatives you have.]

</p>
            </div>
        </div>
        <div className="sec3">
            <div id='imag2'><img src={Image5} alt="image5" /></div>
            <div id='txt2'>
                <p>Visit Us Today

We invite you to explore our extensive range of beauty products, from skincare and makeup to haircare and fragrances. Our cozy and inviting shop is a place where you can discover new products, seek professional advice, and connect with others who share your love for beauty.

Whether you're a beauty novice or a makeup maven, [Your Beauty Shop Name] is here to support you on your journey to feeling confident and beautiful.

Thank you for choosing us as your beauty destination. We can't wait to be a part of your beauty story!</p>
            </div>
        </div>
        </>
    )
}

export default About;