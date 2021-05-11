import React from 'react';
import Joi from "joi-browser";
import Form from "./common/form";
import { getItem, saveItem } from '../services/itemService';
import { getGenres } from '../services/genres';

class ItemForm extends Form {
    state = { 
        data: {
            title: "",
            genreId: "",
            brand: ""
        },
        genres: [],
        errors: {}
     };

     schema = {
         _id: Joi.string(),
         title: Joi.string()
         .required()
         .label("Title"),
         genreId: Joi.string()
         .required()
         .label("Genre"),
         brand: Joi.string()
         .required()
         .label("Brand"),
     };

     componentDidMount() {
        const genres = getGenres();
        this.setState({ genres });
    
        const itemId = this.props.match.params.id;
        if (itemId === "new") return;
    
        const item = getItem(itemId);
        if (!item) return this.props.history.replace("/not-found");
    
        this.setState({ data: this.mapToViewModel(item) });
      }

      mapToViewModel(item) {
        return {
          _id: item._id,
          title: item.title,
          genreId: item.genre._id,
          brand: item.brand,
        };
      }
    
      doSubmit = () => {
        saveItem(this.state.data);
    
        this.props.history.push("/items");
      };


    render() { 
        return ( 
            <div className="container">
            <h1>Item Form</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("title", "Title")}
              {this.renderSelect("genreId", "Genre", this.state.genres)}
              {this.renderInput("brand", "Brand")}

              {this.renderButton("Save")}
            </form>
          </div>
         );
    }
}
 
export default ItemForm;

