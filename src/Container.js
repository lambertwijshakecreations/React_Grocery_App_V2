import React from "react";
import ShoppingCart from "./containers/ShoppingCart";
import GroceryList from "./containers/GroceryList";

class Container extends React.Component {
	constructor() {
		super();
		this.state = {
			groceryItems: [],
			shoppingListItems: []
		};
	}

	render() {
		const addNewShoppingListItem = (itemTitle) => {
			const newShoppingItem = {
				id: this.state.shoppingListItems.length + 1,
				title: itemTitle,
				amount: 1
			};

			this.setState((prevState) => {
				const newList = prevState.shoppingListItems.concat(newShoppingItem);
				return {
					shoppingListItems: newList
				};
			});
		};
		const addAmountToItem = (itemTitle) => {
			const shoppingList = [...this.state.shoppingListItems];
			const newList = shoppingList.map((shoppingItem) => {
				if (shoppingItem.title === itemTitle) {
					shoppingItem.amount++;
				}
				return shoppingItem;
			});
			this.setState({ shoppingListItems: newList });
		};

		const handleClickGroceryItem = (event) => {
			const clickedItem = event.target.innerText;
			console.log(clickedItem);
			const currentShoppingList = this.state.shoppingListItems;
			const shoppingListItem = currentShoppingList.filter(
				(item) => item.title === clickedItem
			);
			shoppingListItem.length === 0
				? addNewShoppingListItem(clickedItem)
				: addAmountToItem(clickedItem);
		};

		const emptyCart = () => {
			this.setState({ shoppingListItems: [] });
		};

		const addGrocery = (grocery) => {
			const groceryitem = {
				id: this.state.groceryItems.length + 1,
				title: grocery
			};
			this.setState({
				groceryItems: this.state.groceryItems.concat(groceryitem)
			});
		};

		return (
			<div className="container">
				<div className="groceries-list groceries">
					<h1>Boodschappenlijst</h1>
					<GroceryList
						addGrocery={addGrocery}
						groceryItems={this.state.groceryItems}
						handleClickGroceryItem={handleClickGroceryItem}
					/>
				</div>
				<div className="groceries-list basket">
					<h1>Winkelmand</h1>
					<ShoppingCart
						groceryItems={this.state.shoppingListItems}
						handleClickEmptyCart={emptyCart}
					/>
				</div>
			</div>
		);
	}
}

export default Container;
