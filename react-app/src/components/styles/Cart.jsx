export default class Cart {

    items              = [];
    attachedComponents = [];
  
    // Given a product object (from PHP api), returns true or
    // false to indicate if the product is in the cart
    contains(product) {
      return this.cartIndexOf(product) !== -1;
    }
  
    // Returns the index of a single item in the cart, or
    // -1 i the item is not in the cart
    cartIndexOf(product) {
      return this.items.findIndex(each => each.id === product.id);
    }
  
    // Add a single item to the cart
    addToCart(product) {
      if (!this.contains(product)) {
        this.items.push(product);
        this.updateComponents();
      }
    }
  
    // Remove a single item from the cart
    removeFromCart(product) {
      const cartIndex = this.cartIndexOf(product);
      if (cartIndex !== -1) {
        this.items.splice(cartIndex, 1);
        this.updateComponents();
      }
    }
  
    // Return all products (array) in the cart
    getProducts() {
      return this.items;
    }
  
    // Return a count of all of the products in the cart
    getProductsCount() {
      return this.items.length;
    }
  
    // Returns the total price of all products in the cart
    getTotalPrice() {
      return this.items.reduce((acc, each) => {
        return acc += parseFloat(each.price);
      }, 0);
    }
  
    // Hack: register a react component so that it can
    // be updated when an item is added or removed from the
    // cart
    registerAttachedComponent(component) {
      if (!!component.forceUpdate) {
        this.attachedComponents.push(component);
      }
    }
  
    // Called whenever an item is added or removed, and
    // calls the 'forceUpdate' method of all components
    // that have been  registered. Also part of the hack
    updateComponents() {
      this.attachedComponents.forEach(component => {
        if (!!component) {
          component.forceUpdate();
        }
      })
    }
  
  }