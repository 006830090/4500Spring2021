import React, { Component } from 'react';
import { getItems } from '../services/itemService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/genres';
import ItemsTable from './itemsTable';
import { Link, NavLink } from 'react-router-dom';
import SearchBox from "./searchBox";
import _ from 'lodash';

class Items extends Component {
    state = { 
        items: [],
        genres: [],
        currentPage: 1, 
        pageSize: 20,
        sortColumn: { path: 'title', order: 'asc'}
    }

    componentDidMount() {
        const genres = [{ _id: '', name: 'All Genres'}, ...getGenres()]

        this.setState({ items: getItems(), genres });
    };

    handleDelete = item => {
        const items = this.state.items.filter(i => i._id !== item._id);
        this.setState({ items: items });
    }; 

    handlePageChange = page => {
        this.setState({ currentPage: page});
    };

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
      };

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 })
    };

    handleSort = sortColumn => {
       
        this.setState({ sortColumn });
    };

    getPageData = () => {
        const { pageSize, currentPage, sortColumn, selectedGenre, searchQuery, items: allItems } = this.state;

        let filtered = allItems;
        if (searchQuery)
        filtered = allItems.filter(m =>
          m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
        else if (selectedGenre && selectedGenre._id)
        filtered = allItems.filter(m => m.genre._id === selectedGenre._id);
        
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const items = paginate(sorted, currentPage, pageSize)

        return { totalCount: filtered.length, data: items}
    }

    render() { 
        const { length: count } = this.state.items;
        const { pageSize, currentPage, sortColumn, searchQuery} = this.state;
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
                        <Link
                            to="/items/new"
                            className="btn btn-primary"
                            style={{marginBottom: 20}}
                        >
                            New Item
                        </Link>
                        <p>Showing {totalCount} Items</p>

                        <SearchBox value={searchQuery} onChange={this.handleSearch} />
                        
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