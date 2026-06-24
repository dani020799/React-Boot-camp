 function Item({ item, shouldDiscount }) {
    const price = shouldDiscount
      ? item.price * (1 - item.discount)
      : item.price

    return (
      <div>
        {item.item}: ${price}
      </div>
    )
  }

  export default Item
