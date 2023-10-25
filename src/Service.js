import React from 'react'
import './Service.css';
import { Link } from "react-router-dom";
export default function Service() {
  return (
    <>
     <nav className='navbar'>
     <a href='#'><h1 className='pass'>Passport</h1></a>
  
        <ul className='xyz'>
            <li><Link to='Home.js      ' className='hom'>Home</Link></li>
            <li><Link to='/' className='about'>About</Link></li>
            <li><Link to='/' className='service'>Service</Link></li>

            <button className='button'>Contect Us</button>
            </ul>
    </nav>
    <div className='luck1'>
    <h1 className='head1'>Services</h1>
    <p className='perag1'>Far far away, behind the word mountains, far from the countries <br></br> Vokalia and Consonantia, there live the blind texts.</p>
    <p className='perag2'>Our Services Includes...</p>
    {/* <h1 className='perag3'>Explore All Corners <br></br>of The World With Us</h1>
<p className='perag4'>
</p> */}</div>
<nav className='navebar2'>
       <img className='image1' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACKAIwDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAIBAwQG/8QAKxABAQACAQMDAgQHAAAAAAAAAAECEQMEITESQVETsSIzcXIjQlSBoaLR/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EABsRAQEBAQEBAQEAAAAAAAAAAAABESECEiIx/9oADAMBAAIRAxEAPwD7MAAAAAAAAAAAAAAAAAAAAAATcvhNu2a3F7nyeqfKBmtxe41zbLY3WYsZMttawAAAAAAAARbtuV9kptbIAMUDlyctxzmGGHry1uzetRP1ef8Ap/8AeJ+or5ruI485ycczni/4WqdT/BWN9qkGOgyXcatIAAAADL4oIvegIWMtklt8Rrl1GGXJw5YYWS35+GXkJ2p6aXKZct88l3P09nd5s8+o4sJbjxa3JqWmPJ1GWWeMx4t43V71E9ScdL5t6rj/AIXUZcf8uf4sf193d5s+PqOTLC2cU9OW9y16W+U+gBaW43utznl0VE0AawAAZl4ay+AQAhYADz9Zc/pSYY2999pvx3b09t5Oa2avqnb+0d3Hh/O5/wB0+znZ+pVy/mx2AdEAADo5zy6KiaANYAAAAizVYvKbiE1UAGNHHh/O5/3T7OmfHjySTLfb4ys+znOm4pbZM5vz+PL/AKmy7xUszrsE7QUkAncFYz3UyTUaqIAGgAAAAnLH4UA5i7JU3GpxWsDVGNA1fhUx+TGJ8rk0SaaqRloA1gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q=='></img>
      <img className='image2' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAB/AJ0DASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAIBAwQG/8QAMhAAAgIBAAcFBwQDAAAAAAAAAAECAxEEEhMUITFTQVGRodEyNHGBgpKxIjNhcsHh8P/EABcBAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAgEQEBAAIBBAMBAAAAAAAAAAAAAQIR8CEiMfFhodES/9oADAMBAAIRAxEAPwD7MAAAAAAAAAAAZlDKA0AAAAAAAAAAAAAAAAAAAY3ghvJlrZFOXcTnIBO2gADTOClLvJA2x0BzTwWnkqVljQAawAAAAAAAAAMk8ICZPLMAIUAANcnpNKeHbDxG80dWH3HOiyNWiRlLveF2vizldba5LWexaWca3/Z+Bxudk26zCW6eneaOrD7jommk08pnF3RtqsSTjJReYyWHyLo/Yr/qvwXLuos1HQ2LwzAWh0BkXlGlpAAAAAAAACZlES5mVsYACVPPr3WKc6nFRTainHOtj5nWFilUrOzGTxvRYx0qKlGOpNvCXdg72SpqpnWpQjiL/TlHHG3ra65SXUjkq1JRlHRp45xe0x/k11OWM6NY8cs28vMmq7XilvEKlFJJcOPD+Q9KcW69vCXFJT4cE+ZG8del6y37U6svL0abeMZ2v+z00yjOqLgmo4wk+w80r9nqy3qFiyk48OXyL0S6pUxi7Ia2Xw1lnmXjZMtficpbjv8AXpAB2cVQKIjzLKiaAA1gAAAAAEzKMksoytiAASpxt94o+r8HKm2mG0U5wUtd82dbfeKPq/B56td3aqslFSlPKWOz5HG3WXPh2k3jz5ejeNH6lfihvGj9SvxRuxl1rPL0Gxl1rPL0K7ue0dvPTN40fqV+KOWk3USomo2Qba4JNHbYy61nl6Hm0lTjrQ2s3HZuXHHoTncpOvPtWMxt6c+ntXso0yPsr4GnZyVDtKMisI0qJoADWAAAAAAAAIksMwtrJDWCbFSuc6Kpz1pwTl3mxqhGxzUUpPmywT/MVugANYEWVQsac4p45Fgyzfkl14DYrLMSyWlgqRlrQAUkAAAAAAAAAAAAAS49xOGjoDNN25gvAwZo2jDZSj3lA3RsABrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=='></img>
      <img className='image3' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAByAIEDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAMCAQQG/8QANBABAAIBAQQFCwMFAAAAAAAAAAECAxEEEhMxFCFBUdEiJDRUYmNxk6Gi8AWSwSNTc4Gx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EAB4RAQEBAQACAgMAAAAAAAAAAAABEQISITFBUWGh/9oADAMBAAIRAxEAPwD7MAAAAGZt3A0JzMyM1uN6x3upjNMUGIt3tROrdMdAawAAAAAABm09gOTOrg5MxWJmZ0iOaFuiePPjyzMUtrOmvKYUZLL8FlnyANA5ADcTq6nE6KR1qlTYANYAAAAJt25MJqoMZsfFx2prNde2G3m/q5rZN3Lw61tNdIrqjq/S+Z9pYLza18uS9pjFE6RpEax+QvG0TMaxhyfb4ox+nzETHGnSecTXXV2di6p8qn+sVXHnzk+HXrwt+V8eaMl5ru2rMRr16fwq8WzbNkxxO7acfxpWdfqtws/rH2Q6c9dZ7iOued9VcQ4Wf1j7IbwXnJhre2msx16KnXvMRZ63VGqz2Mu15ria2ApIAAADNuTLduTCaqDy4sVb2yzbe14k8rTH/HqeXFfJW2WKYpvHEnri0Q59Zs1053LivR8ft/Mt4oWpjnLjrS19N6a28u3d8VuLm9Xt+6E7XvbaMO/imnXPOYnsR14/U/iufL7v9V6Pj9v5lvE6Pj9v5lvFUdPHn8Ofl1+Uuj4/b+Zbxc2P0an52rI7J6NT87WZJ16VtvPtYjnA7XmtzbAWkAAAATUZtHaytjKOz88v+SVkZ2as2tMXyV3p1mK2mIc7uyx0mZZVnlz8Ti4tJrNt6d3Xlpop0aP7uX98ldnrW8Wm17THLetMpst9Nlkc859z9Tzn3P1XFeP7Z5fpDzn3P1d2P0anw/lZmlIx0iteqIZOcul62Y01WO1mI1UjqdIigCkgAAAAAMTGjijM17k2N1kdmJhxigAA5uxWWojRuM0iNHQUkAAAAAAAAAAABzSO50AAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z'></img>   
      <img className='image4' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAB/AJ8DASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAIBAwQG/8QALRABAQEAAQIDBgUFAQAAAAAAAAECAxExBBLRFCFBUVJhEyJTkaEyNEKSk3L/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/8QAGxEBAQEBAQEBAQAAAAAAAAAAAAERAiESMVH/2gAMAwEAAhEDEQA/APswAAAAAAAAAAAAAAAAAAAAAAAAAAZdQGifN9jzfZmtxQyajWsAAAAAAAAAAAAGW9DV6IZa2QttASoAAJbABcvVrmvN6qlTY0BrAAAAAAAE67Am3rQELGSyzrLLPs4+J9+ePN7a3JZ84zPh9Y5rrGs8eb/jnPdF6u5IqczNtegBaQAAl6UAdBOeyloAAAAAAEa7rRruytjGWyS29o1lks6XtUqebl5pyfh3GeSybmuvkvZ19oz9HJ/z16OPh/D8euPpqXzZtzfzV19l4fp1/vfVxn3fXW/E8b7Rn6OT/nr0ZfE4lkueSW9vyX3/AMHsvD9Ov976ueuHHHz8NxLLdXvq34Nt7n8ZJxXS+JxJbc8kk+N476HtOOktm5PncXorxH9vyf8AmvNrg45+BMy9dWW/mt90h1epfDmc2evaA6ubc91oz3WqJoA1gAAAAnSmWdYUQAhbhvrw8l5ZLca/rk+H3ds6mpLmyy9rGuN8PnrbjW+Pr3mL0lTln4rZf12cfE8WuSZuL0ub179P5PZ7+vy/vPQ9nv6/L+89GXbMxsyXdebl4uWcd8+7nN91t5bf46PRwYtv4m5ZenlzL8J6qxwZzqa1db1O11evR1Tzxl2t672ZAB1c1ZUyTpGrQAAAAAAAAnU+KXRNz8k2NlSAxQAAAArM+JM/NTZE2gCmAAAAAAAAAAMslZ5VDMNR5aeWrDG6nytkkaGM0AaAAAAAAP/Z'></img>    
         
      
      </nav>
      <nav className='new1'>
     <div>
      <h2 className='pera1'>Reduce costs to a<br></br> minimum</h2> 
           <p>Separated they live in<br></br>
            Bookmarksgrove right at the coast of<br></br>
             the Semantics, a large language <br></br>ocean.</p>
             </div> <span>
     <h2>Reduce costs to a <br></br>minimum</h2>
     <p>Separated they live in<br></br> Bookmarksgrove right at 
      the coast of<br></br> the Semantics, a large language <br></br> ocean.</p>
      </span>
      <span>
      
       <h2>Reduce costs to a<br></br> minimum</h2>
       <p>Separated they live in<br></br> Bookmarksgrove right at 
       the coast of <br></br>the Semantics, a large language <br></br> ocean.</p>
      </span>
      <span>
       
        <h2>Reduce costs to a <br></br>minimum</h2>
        <p>Separated they live in<br></br> Bookmarksgrove right at 
        the coast of<br></br> the Semantics, a large language<br></br> ocean.</p>
      </span>
</nav>
<nav className='navebar3'>
       <img className='image1' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACKAIwDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAIBAwQG/8QAKxABAQACAQMDAgQHAAAAAAAAAAECEQMEITESQVETsSIzcXIjQlSBoaLR/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EABsRAQEBAQEBAQEAAAAAAAAAAAABESECEiIx/9oADAMBAAIRAxEAPwD7MAAAAAAAAAAAAAAAAAAAAAATcvhNu2a3F7nyeqfKBmtxe41zbLY3WYsZMttawAAAAAAAARbtuV9kptbIAMUDlyctxzmGGHry1uzetRP1ef8Ap/8AeJ+or5ruI485ycczni/4WqdT/BWN9qkGOgyXcatIAAAADL4oIvegIWMtklt8Rrl1GGXJw5YYWS35+GXkJ2p6aXKZct88l3P09nd5s8+o4sJbjxa3JqWmPJ1GWWeMx4t43V71E9ScdL5t6rj/AIXUZcf8uf4sf193d5s+PqOTLC2cU9OW9y16W+U+gBaW43utznl0VE0AawAAZl4ay+AQAhYADz9Zc/pSYY2999pvx3b09t5Oa2avqnb+0d3Hh/O5/wB0+znZ+pVy/mx2AdEAADo5zy6KiaANYAAAAizVYvKbiE1UAGNHHh/O5/3T7OmfHjySTLfb4ys+znOm4pbZM5vz+PL/AKmy7xUszrsE7QUkAncFYz3UyTUaqIAGgAAAAnLH4UA5i7JU3GpxWsDVGNA1fhUx+TGJ8rk0SaaqRloA1gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q=='></img>
      <img className='image2' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAB/AJ0DASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAIBAwQG/8QAMhAAAgIBAAcFBwQDAAAAAAAAAAECAxEEEhMUITFTQVGRodEyNHGBgpKxIjNhcsHh8P/EABcBAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAgEQEBAAIBBAMBAAAAAAAAAAAAAQIR8CEiMfFhodES/9oADAMBAAIRAxEAPwD7MAAAAAAAAAAAZlDKA0AAAAAAAAAAAAAAAAAAAY3ghvJlrZFOXcTnIBO2gADTOClLvJA2x0BzTwWnkqVljQAawAAAAAAAAAMk8ICZPLMAIUAANcnpNKeHbDxG80dWH3HOiyNWiRlLveF2vizldba5LWexaWca3/Z+Bxudk26zCW6eneaOrD7jommk08pnF3RtqsSTjJReYyWHyLo/Yr/qvwXLuos1HQ2LwzAWh0BkXlGlpAAAAAAAACZlES5mVsYACVPPr3WKc6nFRTainHOtj5nWFilUrOzGTxvRYx0qKlGOpNvCXdg72SpqpnWpQjiL/TlHHG3ra65SXUjkq1JRlHRp45xe0x/k11OWM6NY8cs28vMmq7XilvEKlFJJcOPD+Q9KcW69vCXFJT4cE+ZG8del6y37U6svL0abeMZ2v+z00yjOqLgmo4wk+w80r9nqy3qFiyk48OXyL0S6pUxi7Ia2Xw1lnmXjZMtficpbjv8AXpAB2cVQKIjzLKiaAA1gAAAAAEzKMksoytiAASpxt94o+r8HKm2mG0U5wUtd82dbfeKPq/B56td3aqslFSlPKWOz5HG3WXPh2k3jz5ejeNH6lfihvGj9SvxRuxl1rPL0Gxl1rPL0K7ue0dvPTN40fqV+KOWk3USomo2Qba4JNHbYy61nl6Hm0lTjrQ2s3HZuXHHoTncpOvPtWMxt6c+ntXso0yPsr4GnZyVDtKMisI0qJoADWAAAAAAAAIksMwtrJDWCbFSuc6Kpz1pwTl3mxqhGxzUUpPmywT/MVugANYEWVQsac4p45Fgyzfkl14DYrLMSyWlgqRlrQAUkAAAAAAAAAAAAAS49xOGjoDNN25gvAwZo2jDZSj3lA3RsABrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=='></img>
      <img className='image3' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAByAIEDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAMCAQQG/8QANBABAAIBAQQFCwMFAAAAAAAAAAECAxEEEhMxFCFBUdEiJDRUYmNxk6Gi8AWSwSNTc4Gx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EAB4RAQEBAQACAgMAAAAAAAAAAAABEQISITFBUWGh/9oADAMBAAIRAxEAPwD7MAAAAGZt3A0JzMyM1uN6x3upjNMUGIt3tROrdMdAawAAAAAABm09gOTOrg5MxWJmZ0iOaFuiePPjyzMUtrOmvKYUZLL8FlnyANA5ADcTq6nE6KR1qlTYANYAAAAJt25MJqoMZsfFx2prNde2G3m/q5rZN3Lw61tNdIrqjq/S+Z9pYLza18uS9pjFE6RpEax+QvG0TMaxhyfb4ox+nzETHGnSecTXXV2di6p8qn+sVXHnzk+HXrwt+V8eaMl5ru2rMRr16fwq8WzbNkxxO7acfxpWdfqtws/rH2Q6c9dZ7iOued9VcQ4Wf1j7IbwXnJhre2msx16KnXvMRZ63VGqz2Mu15ria2ApIAAADNuTLduTCaqDy4sVb2yzbe14k8rTH/HqeXFfJW2WKYpvHEnri0Q59Zs1053LivR8ft/Mt4oWpjnLjrS19N6a28u3d8VuLm9Xt+6E7XvbaMO/imnXPOYnsR14/U/iufL7v9V6Pj9v5lvE6Pj9v5lvFUdPHn8Ofl1+Uuj4/b+Zbxc2P0an52rI7J6NT87WZJ16VtvPtYjnA7XmtzbAWkAAAATUZtHaytjKOz88v+SVkZ2as2tMXyV3p1mK2mIc7uyx0mZZVnlz8Ti4tJrNt6d3Xlpop0aP7uX98ldnrW8Wm17THLetMpst9Nlkc859z9Tzn3P1XFeP7Z5fpDzn3P1d2P0anw/lZmlIx0iteqIZOcul62Y01WO1mI1UjqdIigCkgAAAAAMTGjijM17k2N1kdmJhxigAA5uxWWojRuM0iNHQUkAAAAAAAAAAABzSO50AAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z'></img>   
      <img className='image4' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAB/AJ8DASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAIBAwQG/8QALRABAQEAAQIDBgUFAQAAAAAAAAECAxExBBLRFCFBUVJhEyJTkaEyNEKSk3L/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/8QAGxEBAQEBAQEBAQAAAAAAAAAAAAERAiESMVH/2gAMAwEAAhEDEQA/APswAAAAAAAAAAAAAAAAAAAAAAAAAAZdQGifN9jzfZmtxQyajWsAAAAAAAAAAAAGW9DV6IZa2QttASoAAJbABcvVrmvN6qlTY0BrAAAAAAAE67Am3rQELGSyzrLLPs4+J9+ePN7a3JZ84zPh9Y5rrGs8eb/jnPdF6u5IqczNtegBaQAAl6UAdBOeyloAAAAAAEa7rRruytjGWyS29o1lks6XtUqebl5pyfh3GeSybmuvkvZ19oz9HJ/z16OPh/D8euPpqXzZtzfzV19l4fp1/vfVxn3fXW/E8b7Rn6OT/nr0ZfE4lkueSW9vyX3/AMHsvD9Ov976ueuHHHz8NxLLdXvq34Nt7n8ZJxXS+JxJbc8kk+N476HtOOktm5PncXorxH9vyf8AmvNrg45+BMy9dWW/mt90h1epfDmc2evaA6ubc91oz3WqJoA1gAAAAnSmWdYUQAhbhvrw8l5ZLca/rk+H3ds6mpLmyy9rGuN8PnrbjW+Pr3mL0lTln4rZf12cfE8WuSZuL0ub179P5PZ7+vy/vPQ9nv6/L+89GXbMxsyXdebl4uWcd8+7nN91t5bf46PRwYtv4m5ZenlzL8J6qxwZzqa1db1O11evR1Tzxl2t672ZAB1c1ZUyTpGrQAAAAAAAAnU+KXRNz8k2NlSAxQAAAArM+JM/NTZE2gCmAAAAAAAAAAMslZ5VDMNR5aeWrDG6nytkkaGM0AaAAAAAAP/Z'></img>    
         
      
      </nav>
      <nav className='new2'>
     <div>
      <h2 className='pera1'>Reduce costs to a<br></br> minimum</h2> 
           <p>Separated they live in<br></br>
            Bookmarksgrove right at the coast of<br></br>
             the Semantics, a large language <br></br>ocean.</p>
             </div> <span>
     <h2>Reduce costs to a <br></br>minimum</h2>
     <p>Separated they live in<br></br> Bookmarksgrove right at 
      the coast of<br></br> the Semantics, a large language <br></br> ocean.</p>
      </span>
      <span>
      
       <h2>Reduce costs to a<br></br> minimum</h2>
       <p>Separated they live in<br></br> Bookmarksgrove right at 
       the coast of <br></br>the Semantics, a large language <br></br> ocean.</p>
      </span>
      <span>
       
        <h2>Reduce costs to a <br></br>minimum</h2>
        <p>Separated they live in<br></br> Bookmarksgrove right at 
        the coast of<br></br> the Semantics, a large language<br></br> ocean.</p>
      </span>
</nav>
<div>
            <nav class="aaa">
                <h1 class="bbb">Begin your adventurous journey here.</h1>
                <button class="ccc">Get Started</button>
            </nav>
         </div>
<div>
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
                    <li className='cqq'>43 Raymouth Rd. Baltemoer, London <br></br> 3910</li>
                    <br></br>
                    <li><a className='afg' href="tel:+11234567890">+1(123)-456-7890</a></li>
                    <li><a className='afh' tel href="tel:+11234567890">+1(123)-456-7890</a></li>
                    <li><a className='afi' href='https://preview.colorlib.com/theme/passport/about.html#'>info@mydomain.com</a></li>
                    
                 </ul>
                 </span>
         </div>
         
</div>   
<p className='ppp'>Copyright ©2023 All rights reserved | This template is made with  by <a className='hr1' href='#'> Colorlib</a></p>


         
        </>
  )
}
