// Base Component class
export abstract class Component<P = {}> {
  protected props: P;
  protected element: HTMLElement | null = null;

  constructor(props: P) {
    this.props = props;
  }

  abstract render(): string;

  mount(container: HTMLElement): void {
    container.innerHTML = this.render();
    this.element = container.firstElementChild as HTMLElement;
    this.afterMount();
  }

  // Hook called after component is mounted
  protected afterMount(): void {
    // Override in child classes if needed
  }

  // Update props and re-render
  update(newProps: Partial<P>): void {
    this.props = { ...this.props, ...newProps };
    if (this.element && this.element.parentElement) {
      this.mount(this.element.parentElement);
    }
  }

  // Unmount and cleanup
  unmount(): void {
    if (this.element && this.element.parentElement) {
      this.element.parentElement.removeChild(this.element);
    }
    this.element = null;
  }
}
