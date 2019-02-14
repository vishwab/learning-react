import React from 'react';


/*
 * Lists and Keys...
 * https://reactjs.org/docs/lists-and-keys.html
 */

/*
 * Move list items back & forth b/w 2 components
 *	https://stackoverflow.com/questions/44915012/reactjs-moving-list-items-back-and-forth-between-two-components
 *  Below link is from the above page with a working example:
 *		https://jsfiddle.net/vbwe1s44/
 */
export default class ShoppingList extends React.Component {

	constructor(props) {
		super(props)
		this.state = { text: '', submittedValue: [], cartList: [] };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.handleEvent = this.handleEvent.bind(this);

	}

    handleEvent = (clickedItem) => {
    	//alert("clickedItem: " + clickedItem);
        const { submittedValue, cartList } = this.state;
        const isInSubmittedValue = submittedValue.some(result => result === clickedItem);
        //alert("isInSubmittedValue? " + isInSubmittedValue);


    		this.setState({
            submittedValue: isInSubmittedValue ? submittedValue.filter(i => i  !== clickedItem) : [...submittedValue, clickedItem],
            cartList: isInSubmittedValue ? [...cartList, clickedItem] : cartList.filter(i => i !== clickedItem)

        });
    }

	handleChange(event) {
		this.setState( {text: event.target.value} );
	}

	handleSubmit(event) {
		//alert("User submitted: " + this.state.text);
		this.state.submittedValue.push(this.state.text);
		this.setState({submittedValue: this.state.submittedValue});
		console.log("ToDO: " + this.state.submittedValue);
		event.preventDefault();
	}
	
	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					<ul>
					<li>Enter item to Add to Shopping List and hit Submit.</li><br />
					<li>Once you add an item it will appear under "Need to Buy".</li><br />
					<li>To add items to Shopping Cart, simply click on the item under "Need to Buy".</li><br />
					</ul>
				</label>

				<br />
				<input type="text" value={this.state.text} onChange={this.handleChange} />

				<p></p>
				<input type="submit" value="Submit" />

				<p></p>
				<br /><br /><br />

				<label>
					<u><b>Need to Buy:</b></u>
					<br />
					<Items itemsList={this.state.submittedValue} 
					handleEvent={this.handleEvent} />
				</label>

				<p></p>
				<br /><br />
				<label>
					<u><b>Shopping Cart:</b></u>
					<br />
					<Items itemsList={this.state.cartList} 
					handleEvent={this.handleEvent} />
				</label>


			</form>
		);
	}
}

class Items extends React.Component {

	render() {
		
		const {handleEvent, itemsList} = this.props;
		
		return(
			<ul>
				{this.props.itemsList.map(
					(item) => <Item item={item} handleClick={handleEvent} />
				)}
			</ul>
		);
	}
}

class Item extends React.Component {

	render() {

		const {item, handleClick} = this.props;

		return(
			<li onClick={() => handleClick(item)} >
				{this.props.item}
			</li>
		);
	}
}