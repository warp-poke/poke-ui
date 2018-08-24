import { Component, Element, Event, EventEmitter, Prop, State, Watch } from "@stencil/core";

@Component({
  tag: "poke-check-filter",
  styleUrl: "poke-check-filter.scss"
})
export class PokeCheckFilter {

  @Element() el: HTMLElement;

  @State() value: string = '';

  @Prop()
  filter: string;

  @Watch('filter')
  onFilterChange() {
    this.value = this.filter
  }

  @Event({eventName: 'filter-change'}) filterChangeEmitter: EventEmitter;

  handleChange(event) {
    let value: string = event.target.value;
    console.log('[poke-check-filter] handleChange', value);

    this.filterChangeEmitter.emit({filter:value});
  }

  componentDidLoad() {
    if (this.value != this.filter) {
      this.value = this.filter;
    }
    this.el.focus();
    this.el.querySelector('input').focus();
    console.log(this.el.querySelector('input'))
  }

  render() {
    return (
      <form class="search">
        <div class="input-group">
          <input
              class="form-input"
              type="text"
              placeholder="filter..."
              value={this.value}
              onInput={(event) => this.handleChange(event)} />
        </div>
      </form>
    );
  }
}