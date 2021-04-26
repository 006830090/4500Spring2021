import React from 'react';

const CategoryForm = ( { match, history }) => {
    return (
        <div>
            <h1>
                Category Form {match.params.id} 
            </h1>
            <button className="btn btn-primary" onClick={() => history.push('/categories')}>Save</button>
        </div>
    );
}


 
export default CategoryForm;