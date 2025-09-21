import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import Categories from "./components/category";
import ShowFullItem from "./components/showFullItem";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],

      currentItems: [],
      items: [
        {
          id: 1,
          title: "Modern Armchair",
          description:
            "Cozy armchair with wooden legs and soft fabric upholstery.",
          img: "Modern Armchair.jpg",
          category: "chairs",
          price: "120",
        },
        {
          id: 2,
          title: "Oak Dining Table",
          description: "Solid oak dining table, perfect for family gatherings.",
          img: "Oak Dining Table.jpg",
          category: "tables",
          price: "350",
        },
        {
          id: 3,
          title: "Queen Size Bed",
          description:
            "Spacious queen bed with a stylish upholstered headboard.",
          img: "Queen Size Bed.jpg",
          category: "beds",
          price: "499",
        },
        {
          id: 4,
          title: "Itlaian Bookshelf",
          description:
            "Tall bookshelf with five adjustable and sturdy shelves.",
          img: "bookshelf.jpg",
          category: "storage",
          price: "180",
        },
        {
          id: 5,
          title: "Minimalistic Sofa",
          description:
            "Three-seater sofa with plush cushions and leather cover.",
          img: "sofa.webp",
          category: "sofas",
          price: "650",
        },
        {
          id: 6,
          title: "Nightstand",
          description:
            "Compact nightstand with drawer and an open shelf space.",
          img: "Nightstand.webp",
          category: "bedroom",
          price: "75",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }
  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    this.setState({
      currentItems: this.state.items.filter((el) => {
        if (el.category === category) {
          return true;
        } else if (category === "all") {
          return true;
        }
        return false;
      }),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
