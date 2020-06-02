import React from 'react';

const Card =({ name, email, id })=>{
return(
<div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
 <img src={`https://robohash.org/set_set4/${id}/bgset_bg1/3.14159?size=200x200`}  alt='cats'/>
<div>
 <h2>{name}</h2>
 <p>{email}</p>
</div>
</div>
);
}
export default Card;