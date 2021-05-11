import React, { Component } from 'react';
import { getItems } from '../services/itemService';
import Pagination from './common/paginationCat';
import { paginate } from '../utils/paginate';
import { getGenres } from '../services/genres';
import { getCats } from '../services/itemCat';
import CategoryTable from './categoryTable';
import _, { get } from 'lodash';
import './style/category.css';
import items from '../services/itemService';
import SideNav from './common/sideNavCat';
import { Route } from 'react-router-dom';



class Categories extends Component {
    state = { 
        items: [],
        genres: [],
        cats: [],
        currentPage: 1, 
        pageSize: 9,
     }

     componentDidMount() {
        this.setState({ items: getItems(), genres: getGenres(), cats: getCats() });
     }

     handlePageChange = page => {
         this.setState({ currentPage: page});
     }

     handleGenreSelect = genre => {
         this.setState({ selectedGenre: genre });
     }

     handleCatSelect = cat => {
        console.log(cat);
    }

    render() { 

        const {length: count} = this.state.items;
        const {pageSize, currentPage, selectedGenre, items: allItems} = this.state;

        if(count=== 0) return <h1>No Items For This Category</h1>;

        const filtered = selectedGenre && selectedGenre._id ? allItems.filter(i => i.genre._id === selectedGenre._id) : allItems;

        const categories = paginate(filtered, currentPage, pageSize);

        return (  
            <div className="row">
                
                <div className="col-3">
                    <SideNav 
                        items={this.state.genres} 
                        onItemSelect={this.handleGenreSelect} 
                        mainCats={this.state.cats}
                        selectedItem={this.state.selectedGenre}
                    />
       
                </div>
                
                
                <div className="col">
                    
                    <CategoryTable data={categories} />
                    
                    <Pagination 
                        itemsCount={filtered.length} 
                        pageSize={pageSize} 
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange} 
                    />
                </div>
            </div>

        );
    }
}
 
export default Categories;