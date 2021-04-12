import React, { Component } from 'react';
import Table from './common/table';
import{ Link } from 'react-router-dom';

class ItemsTable extends Component {

    columns = [
        { path: 'title', label: 'Title', content: item => <Link to={`/items/${item._id}`}>{item.title}</Link>},
        { path: 'genre.name', label: 'Genre'},
        { path: 'availability', label: 'Availability'},
        { path: 'condition', label: 'Condition'},
        { path: 'brand', label: 'Brand'},
        { key: 'delete', content: item => (
            <button 
            onClick={() => this.props.onDelete(item)}
            className="btn btn-danger btn-sm"
            >
                Delete
            </button>)
        }
    ];

    render() { 

        const  { items, onSort, sortColumn } = this.props; 

        return ( 
            <Table 
                columns={this.columns} 
                data={items}
                sortColumn={sortColumn}
                onSort={onSort}   
            />
         );

    }
}


 
export default ItemsTable;