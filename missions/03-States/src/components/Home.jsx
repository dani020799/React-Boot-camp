 
  import Item from './Item'

 
 function Home({ store, shouldDiscount }) {
    return (
      <div>
        <h4>Store</h4>

        {store.map((item) => (
          <Item
            key={item.item}
            item={item}
            shouldDiscount={shouldDiscount}
          />
        ))}
      </div>
    )
  }

  export default Home
