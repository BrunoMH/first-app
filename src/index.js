import React from 'react' ;
import ReactDOM from 'react-dom';
 

const App = () => {
    const buttonText = "Hello World";

    return(
        <div>
            <label for="name" ClassName="label">enter e-mail</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'red', color: 'white'}}>
              { buttonText }
            </button>
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)
