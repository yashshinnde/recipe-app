import React from 'react';

const Header = (props) =>
{
    return(
        <div className="jumbotron">
            <h1 className="display-1">Food Recipes</h1>
            <div class="input-group mb-3 w-50 mx-auto">
                
                <input type="text" placeholder={props.search} value={props.search} class="form-control" onChange={props.onInputChange}/>
                <button onClick={props.onSearchClick} className="btn btn-dark">Search</button>
            </div>
        </div>
    );
}
export default Header;