import React, { Component } from 'react';
import { getItems } from '../services/itemService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/genres';
import ItemsTable from './itemsTable';
import _ from 'lodash';

class Items extends Component {
    state = { 
        items: [],
        genres: [],
        currentPage: 1, 
        pageSize: 4,
        sortColumn: { path: 'title', order: 'asc'}
    }

    componentDidMount() {
        const genres = [{ _id: '', name: 'All Genres'}, ...getGenres()]

        this.setState({ items: getItems(), genres });
    }

    handleDelete = item => {
        const items = this.state.items.filter(i => i._id !== item._id);
        this.setState({ items: items });
    }; 

    handlePageChange = page => {
        this.setState({ currentPage: page});
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }

    handleSort = sortColumn => {
       
        this.setState({ sortColumn });
    }

    getPageData = () => {
        const { pageSize, currentPage, sortColumn, selectedGenre, items: allItems } = this.state;

        const filtered = selectedGenre && selectedGenre._id ? allItems.filter(i => i.genre._id === selectedGenre._id) : allItems;
        
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const items = paginate(sorted, currentPage, pageSize)

        return { totalCount: filtered.length, data: items}
    }

    render() { 
        const { length: count } = this.state.items;
        const { pageSize, currentPage, sortColumn} = this.state;
        if (count === 0) return <p>No Items In Cart</p>;

        const {totalCount, data: items} = this.getPageData();
        return ( 
            <React.Fragment>
                <div className="row ">
                    <div className="col-2">
                        <ListGroup 
                            items= {this.state.genres} 
                            selectedItem={this.state.selectedGenre}
                            onItemSelect={this.handleGenreSelect}
                        />
                    </div>
                    
                    <div className="col">
                        <p>Showing {totalCount} Items</p>
                        
                        <ItemsTable 
                            items={items} 
                            sortColumn={sortColumn}
                            onDelete={this.handleDelete}
                            onSort={this.handleSort}
                        />
                        
                        <Pagination 
                            itemsCount={totalCount} 
                            pageSize={pageSize} 
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
    
                    </div>
                
                </div>
        </React.Fragment>
        );
    }
}
 
export default Items;