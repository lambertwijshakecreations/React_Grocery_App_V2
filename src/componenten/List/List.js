import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
	render() {
		const { items, readonly, handleClickItem } = this.props;
		const listItems = items
			? items.map((item) => (
					<ListItem
						key={item.id}
						item={item}
						readonly={readonly}
						clickItem={handleClickItem}
					/>
			  ))
			: " ";

		return (
			<div>
				<ul>{listItems}</ul>
			</div>
		);
	}
}

export default List;
