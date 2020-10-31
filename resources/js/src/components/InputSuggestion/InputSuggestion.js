import React, {Component} from 'react';
import './input-suggestion.css';


class InputSuggestion extends Component {

    constructor(props) {        
        super(props);
        this.state={
            suggestions:[],
        };
    }

    suggestionLists(suggestions,activeIndex,onClickSuggestion,renderSuggestion){   
        if(suggestions.length==0){
            return (<li className="empty">No Result Found</li>)
        }else{
            return suggestions.map( 
                (value,index,array) => {
                    return (<li onMouseDown={()=>onClickSuggestion(index,value,array)} key={index} className={activeIndex==index?"active":""} title={value.suggestion_label}>
                        {renderSuggestion(index,value,array)}
                    </li>) 
                }
            )
        }
    }

    render(){      
        const { suggestions, activeIndex, onClickSuggestion, renderSuggestion } = this.props;
        return (
            <div className="custom-input-suggestion-container">
                <ul className="input-suggestions">
                {this.suggestionLists(suggestions,activeIndex,onClickSuggestion,renderSuggestion)}
                </ul>
            </div>      
        );
    }

}

export default InputSuggestion;