import React from 'react'
import './Active.css'

import SingleRow from '../CardSinglerRow/SingleRow';

function Active(props) {
  return (
    <div className="d-flex flex-column flex-wrap gap-2 w-100">
       <SingleRow 
          cardRowTitle="Send/Total&nbsp;Reports"
          Class="red cardbox"
          ActivityRowText="0/0"
       />
       <SingleRow 
          cardRowTitle="Photos&nbsp;and&nbsp;Videos"
          Class="blue cardbox"
          ActivityRowText="0"
       />
       <SingleRow 
          cardRowTitle="Development&nbsp;Skills"
          Class="dark cardbox"
          ActivityRowText="0"
       />
       <SingleRow 
          cardRowTitle="Parents&nbsp;Messages"
          Class="blue cardbox"
          ActivityRowText="0"
       />
    </div>
  )
}

export default Active;