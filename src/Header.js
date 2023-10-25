import React from 'react';
import './Header.css';

import { Link } from "react-router-dom";export default function Header() {
  return (
    <> 
<div id="page">
	<div class="text-center">
		<h1>PASSPORT</h1>

		<a class="btn" href="#menu-fade">Open Menu</a>
	</div>

	<div class="menu menu--fade" id="menu-fade">
		<div class="menu__content">
			<h3>Menu</h3>

			<ul>
				<li><a href='#services-container'>Home </a></li>
				<li><a href='#home'>Services </a></li>
				<li><a href='#newss1'>Best Deal with us </a></li>
				<li><a href='#fr2'>Customer </a></li>
				<li><a href='#fr11'>questions </a> </li>
			</ul>

			<a href="#page" class="menu__close"></a>
		</div>
	</div>
</div>
   
  
    <section id="home">
      <div id="box1">
        <h1>About Us</h1>
        <p>Far far away, behind the word mountains, far from the countries</p>
        <p>Vokalia and Consonantia, there live the blind texts.</p>
       
      </div>
    </section>
    
    {/*  */}
    <section id="services-container">
     
      <div id="services">
       
      <div class="box2">
       
        <h2>Fly away to your dream holiday</h2>
        <p>Get inspired, compare and book flights with more flexibility</p>
        
      </div>

      <div class="box22">
       
        <h2>Take your longest holiday yet</h2>
        <p>Browse properties offering long-term stays, many at reduced monthly rates.</p>
        
      </div> 

      <div class="box23">
       
        <h2>Save 15% with Late Escape Deals</h2>
        <p>Explore thousands of destinations worldwide and save 15% or more</p>
        
      </div>
  </div>
    </section>
{/*  */}



<section id='newss1'>
 <h3>HEAVEN OF BEST PRICES</h3>
 <h1>
HEAVEN OF BEST PRICES
PriceGuarantee.com</h1>
 <p>

Book with total confidence <br></br>
Hotels in New York from $35<br></br>
Hotels in London from $26<br></br>
Hotels in Hong Kong from $13<br></br>
Hotels in Rome from $27<br></br>
Hotels in Milan from $19<br></br>
Hotels in Dubai from $27<br></br>
Hotels in Paris from $23<br></br>
Hotels in Barcelona from $18<br></br>
Hotels in Los Angeles from $31<br></br>
Hotels in Miami from $36<br></br>
Hotels in Istambul from $15<br></br>
Hotels in Las Vegas from $99<br></br>
Hotels in Amsterdam from $23<br></br>
Hotels in Berlin from $25<br></br>
Hotels in Pattaya from $14<br></br>
</p>
   
</section>


<section id='fr2'>

    <p className='pp'>Happy Customer</p>
    <p className='pp1'>Testimonials</p>
    <img src='https://preview.colorlib.com/theme/passport/images/person_1.jpg' className='imggg'></img>
    <h5 className='paraa'>John Deo</h5>
    <p className='pp2'>“Far far away, behind the word mountains, far from the countries <br></br> Vokalia and Consonantia,
     there live the blind texts. Separated they <br></br> live in Bookmarksgrove right at the coast of the
      Semantics, a large <br></br> language ocean.”</p>
      </section>
    <br></br>
    <section id='fr1'>
    <p class="ll">Frequently Asked<br></br>
                Questions</ p>
          

                <p className='ll1'>Far far away, behind the word mountains, far from the countries Vokalia and  
                  <br></br> Consonantia, there
                   live the
                 blind texts. Separated they 
                  live in <br></br> Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                
               
    </section>
             
    <section id='fr11'>
    <ul class="ta">
                    <li class="one">How to dowload and register?</li>
                    <li class="two">How to create your paypal account?</li>
                    <li class="three">How to link your paypal and bank account?</li>
                    <li class="four">We are better than other?</li>
                </ul>
    </section>
  
    <h3 class="head81">© 2022 All Rights Reserved.</h3> 

 

</>
  )
}

