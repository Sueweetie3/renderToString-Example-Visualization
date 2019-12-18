import React from "react";
export class ItemList extends React.Component {
  state = {
    showIcon: false
  };
  static getDerivedStateFromProps(props) {
    return props.items.length > 10 ? { showIcon: false } : { showIcon: true };
  }
  render() {
    const { items, selectItems, handleSelectItem } = this.props;
    const showIcon = this.state.showIcon;
    return (
      <div className="product-list">
        <ul>
          {items.map((item, index) => {
            return (
              <ItemView
                key={index}
                item={item}
                selectItems={selectItems}
                handleSelectItem={handleSelectItem}
                showIcon={showIcon}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

function ItemView({ item, selectItems, handleSelectItem, showIcon }) {
  const [checked, setChecked] = React.useState(selectItems.includes(item));
  return (
    <li>
      <input
        type="checkbox"
        value={item}
        onChange={() => {
          setChecked(!checked);
          handleSelectItem(item);
        }}
        checked={checked}
      />
      {showIcon && (
        <img
          src={`./${item}.png`}
          alt={`${item}`}
          style={{
            width: "16px",
            height: "16px",
            marginLeft: "6px",
            marginRight: "12px"
          }}
        />
      )}
      {item}
    </li>
  );
}
