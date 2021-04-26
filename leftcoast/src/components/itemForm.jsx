import React from 'react';

const ItemForm = ( { match, history }) => {
    return (
        <div>
            <h1>
                Item Form {match.params.id} 
            </h1>
            <button className="btn btn-primary" onClick={() => history.push('/items')}>Save</button>
        </div>
    );
}


 
export default ItemForm;