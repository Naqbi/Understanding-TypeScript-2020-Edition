function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };

  return adjustedDescriptor;
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleHtmlElement: HTMLInputElement;
  descriptionHtmlElement: HTMLInputElement;
  peopleHtmlElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true /**/
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;

    this.titleHtmlElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionHtmlElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleHtmlElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private getUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleHtmlElement.value;
    const enteredDescription = this.descriptionHtmlElement.value;
    const enteredPeople = this.peopleHtmlElement.value;

    if(enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredPeople.trim().length === 0) {
      alert('Invalid input, please try again!');
    }
    else {
      return[enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.titleHtmlElement.value = '';
    this.descriptionHtmlElement.value = '';
    this.peopleHtmlElement.value = '';
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.getUserInput();
    if(Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      console.log(title, description, people);
    }
    this.clearInputs()
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prtInput = new ProjectInput();
