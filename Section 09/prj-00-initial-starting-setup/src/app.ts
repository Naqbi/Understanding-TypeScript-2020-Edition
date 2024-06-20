function autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor = {};
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

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleHtmlElement.value);
    console.log(this.descriptionHtmlElement.value);
    console.log(this.peopleHtmlElement.value);
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prtInput = new ProjectInput();
