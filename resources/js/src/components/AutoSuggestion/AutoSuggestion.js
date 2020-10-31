import React from 'react';
import './autosuggestion.css';


const suggestionLists = (suggestions,activeIndex,handleSuggestion) =>{   
    if(suggestions.length==0){
        return (<li className="empty">No Result Found</li>)
    }else{
        return suggestions.map( 
            (value,index) => {
                return (<li onMouseDown={()=>handleSuggestion(index)} key={index} className={activeIndex==index?"active":""} title={value.suggestion_label}>{value.suggestion_label}</li>) 
            }
        )
    }
}

export default function AutoSuggestion(props) { 
    let activeIndex=props.activeIndex?props.activeIndex:0;
    let suggestions=props.suggestions?props.suggestions:[];
    let handleSuggestion=props.handleSetSuggestion?props.handleSetSuggestion:()=>console.log('not set!');
   
    return (
    <div className="suggestion-container">
        <ul className="suggestions">
        {suggestionLists(suggestions,activeIndex,handleSuggestion)}
        </ul>
    </div>      
    );
}