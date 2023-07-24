import React from 'react'

export const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='text-center mt-5'>
<div className='d-flex justify-content-center'>

     <div
     
       className='button fw-bold mt-5' onClick={scrollToTop}>RETURN TO TOP</div>
       </div>

       <div class="d-flex justify-content-center mt-5">

        <span className='line'></span>
       </div>

<div className='d-flex justify-content-center flex-wrap mt-5 gap-3'>
<div>CONTACT</div>
<div>TWITTER</div>
<div>LINKEDIN</div>
<div>CAREERS</div>

</div>

<div className='p-5'>
  &copy; 2022 The Boring Company. All Rights Reserved.
</div>
    </div>
  )
}
