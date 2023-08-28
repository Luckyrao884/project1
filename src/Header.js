import React from 'react';
import './Header.css';

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <> 
    <nav className='navbar'>
     <a href='#'><h1 className='pass'>Passport</h1></a>
  
        <ul className='xyz'>
            <li><Link to='/' className='hom'>Home</Link></li>
            <li><Link to='/' className='about'>About</Link></li>
            <li><Link to='/' className='service'>Service</Link></li>

            <button className='button'>Contect Us</button>
            </ul>
    </nav>
    <h1 className='head1'>About Us</h1>
    <p className='perag1'>Far far away, behind the word mountains, far from the countries <br></br> Vokalia and Consonantia, there live the blind texts.</p>
    <p className='perag2'>ABOUT US</p>
    <h1 className='perag3'>Explore All Corners <br></br>of The World With Us</h1>
<p className='perag4'>Far far away, behind the word mountains, far from the countries<br></br>
 Vokalia and Consonantia, there live the blind texts. Separated they <br></br>
 live in Bookmarksgrove right at the coast of the Semantics, a large <br></br>
 language ocean.
<br></br><br></br>
A small river named Duden flows by their place and supplies it with<br></br>
the necessary regelialia. It is a paradisematic country, in which <br></br> 
roasted parts of sentences fly into your mouth.
</p>
<button className="button1">Read more</button>
<img className='imm1' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCCah-Efq8YrMgXdOTPVATOtpZE8lCuVWt3BBmPRqn7J9nsZYT'></img>
<img className='imm2' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTcZqAK9JrQAoqmDIQEFLhbbxHoj6h-wr4kbatZoK-LDbgnkf55'></img>
<div>
    <p className='pp'>Happy Customer</p>
    <p className='pp1'>Testimonials</p>
    <img src='https://preview.colorlib.com/theme/passport/images/person_1.jpg' className='imggg'></img>
    <h5 className='paraa'>John Deo</h5>
    <p className='pp2'>“Far far away, behind the word mountains, far from the countries <br></br> Vokalia and Consonantia,
     there live the blind texts. Separated they <br></br> live in Bookmarksgrove right at the coast of the
      Semantics, a large <br></br> language ocean.”</p>
     
    
      <div class="di">
            <p class="ll">Frequently Asked<br></br>
                Questions</ p>
                <nav class="nav">
                    How to dowload and register?
                </nav>

                <p className='ll1'>Far far away, behind the word mountains, far from the countries Vokalia and  
                  <br></br> Consonantia, there
                   live the
                 blind texts. Separated they 
                  live in <br></br> Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                
                  <ul class="ta">
                    <li class="one">How to dowload and register?</li>
                    <li class="two">How to create your paypal account?</li>
                    <li class="three">How to link your paypal and bank account?</li>
                    <li class="four">We are better than other?</li>
                </ul>
                </div>
                <div>
            <nav class="zz">
                <h1 class="xx">Begin your adventurous journey here.</h1>
                <button class="bu">Get Started</button>
            </nav>
         </div>
         <div>
         <span>   <h3 class="hh2">About Passport</h3>
            
            <p class="ppq">Far far away, behind the word mountains,
                 far from <br></br> the countries Vokalia and Consonantia,
                 there live the blind <br></br>texts.</p> </span>
               <span>  <ul class="mm">
                    <h3>Links</h3>
                    <li ><a className='ab' href='#'>About us</a></li>
                    <li><a className='ac' href='#'>Services</a></li>
                    <li ><a className='ad' href='#'>News</a></li>
                    <li><a className='ae' href='#'>Carrier</a></li>
                    <li><a className='af' href='#'>Contact</a></li>
                 </ul>
                 <ul class="nn">
                    <h3>Company</h3>
                    <li ><a className='abb' href='#'>About us</a></li>
                    <li><a className='acc' href='#'>Services</a></li>
                    <li ><a className='add' href='#'>News</a></li>
                    <li><a className='aee' href='#'>Carrier</a></li>
                    <li><a className='aff' href='#'>Contact</a></li>
                 </ul>
                 <ul class="bb">
                    <h3>Contact</h3>
                    <li>43 Raymouth Rd. Baltemoer, London <br></br> 3910</li>
                    <br></br>
                    <li><a className='afg' href="tel:+11234567890">+1(123)-456-7890</a></li>
                    <li><a className='afh' tel href="tel:+11234567890">+1(123)-456-7890</a></li>
                    <li><a className='afi' href='https://preview.colorlib.com/theme/passport/about.html#'>info@mydomain.com</a></li>
                    
                 </ul>
                 </span>
         </div>
         
</div>   



</>
  )
}

