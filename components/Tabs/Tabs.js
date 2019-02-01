
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    console.log(this.data);

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", () => this.select());
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabs-link");
    
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(link => link.classList.remove("tabs-link-selected"));

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
    console.log(this.element);
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll(".tabs-item");

    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => item.classList.remove("tabs-item-selected"));

    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected");
  }

}

// Stretch Goals
class Tabs {
  constructor(){
    
    // declare local variables.
    this.tabLinksArray = []
    this.tabItemsArray = document.querySelectorAll(".tabs-item");
    this.currentlySelectedLink = null;
    this.currentlySelectedTab = null; 

    // retrieve all tabLinks
    let tablinks = document.querySelectorAll(".tabs-link");
    // create instance of tabLink and add to tabLinks array;
    tablinks.forEach(tablink => this.tabLinksArray.push( new TabLink(tablink)));

    // add event listeners 
    this.tabLinksArray.forEach(tabLink => tabLink.addEventListener("click", () => Deselect()));

  }

  deselect(event) {

    // set reference to currently clicked tabLink
    this.currentlySelected = event.target; 
    // set reference to currently selected tab item 
    let itemNumber = currentlySelected.dataset.tab;
    this.currentlySelectedTab = tabItemsArray.querySelector(`.tabs-item[data-tab='${itemNumber}']`);

    // retrieve all tablinks & deselect them all by removing "tabs-link-selected class"
    this.tabLinksArray.forEach(tabLink => tabLink.element.classList.remove("tabs-link-selected"));
    
    // Remove the class "tabs-item-selected" from each element
    this.tabItemsArray.forEach(item => item.classList.remove("tabs-item-selected"));
    
    // set class of currentlySelected as "tabs-link-selected"
    this.currentlySelected.element.classList.add("tabs-link-selected");

    // set class of currently selected tab item as "tabs-item-selected"
    this.currentlySelectedTab.classList.add("tabs-item-selected");
    
  }

}

//

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll(".tabs-link");
links.forEach(tabslink => new TabLink(tabslink));

let tabs = new Tabs();