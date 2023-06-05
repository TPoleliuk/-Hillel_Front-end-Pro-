class HTMLElement {
    constructor (tagName, className, id) {
      this.tagName = tagName;
      this.className = className;
      this.id = id;
    }
  
    rotate() {
      console.log("rotating from HTMLElement");
    }
  
    render() {
      console.log("rendering from HTMLElement");
    }
  }

// -------------------------------------HW------------------------------------

// Колекція атрибутів
class CollectionInputAttributes extends Array {
    constructor(...attributes) {
      super(...attributes); 
    }

    // метод фільтру атрибутів залежно від типу інпута
    getAttributeList(type) {
        const attributeList = this.filter(attribute => {
            return attribute.typeList.includes(type);
        });
        return attributeList;
    }
}

const inputAttributes = new CollectionInputAttributes(
    {title: 'placeholder', typeList: ['text', 'search', 'url', 'tel', 'email', 'password'], default: 'some default value'},
    {title: 'size', typeList: ['text', 'search', 'url', 'tel', 'email', 'password'], default: 10},
    {title: 'multiple', typeList: ['file', 'email'], default: false},
    {title: 'required', typeList: ['tel', 'email', 'password'], default: true},
);


class HTMLElementInput extends HTMLElement {
    #type = ''

    constructor(typeInput, ...arg) {
      super(...arg);
      
      this.#type = typeInput;
      
      // конструюємо перелік полів інпута з дефолтними значеннями атрибутів, що притаманні даному типу інпуту
      inputAttributes.getAttributeList(typeInput).map(elem => {
        this[elem.title] = elem.default;
      })
    }

    get type() {
        return this.#type;
    }

    autocomplete() {
      console.log("autocompleting from HTMLElementInput.");
      this.value = 'some default value';
    }
}

const input = new HTMLElementInput('text','input', 'form-input', '33345')

console.log(input)
  