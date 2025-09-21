import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { key: "all", name: "All" },
        { key: "chairs", name: "Chairs" },
        { key: "tables", name: "Tables" },
        { key: "beds", name: "Beds" },
        { key: "storage", name: "Storage" },
        { key: "sofas", name: "Sofas" },
        { key: "bedroom", name: "Bedroom" },
      ],
    };
  }
  render() {
    return (
      <div className="Categories">
        {this.state.categories.map((el) => (
          <div
            className={el.key === this.props.currentCategory ? "active" : ""}
            key={el.key}
            onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
