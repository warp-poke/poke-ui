import { Component, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "poke-check-filter",
  styleUrl: "poke-check-filter.scss"
})
export class PokeCheckFilter {



  @Event({eventName: 'filter-change'}) filterChangeEmitter: EventEmitter;

  handleChange(event) {
    let value: string = event.target.value;
    console.log('[poke-check-filter] handleChange', value);

    this.filterChangeEmitter.emit({filter:value});
  }

  render() {
    return (
      <form class="search">
        <div class="input-group">
          <input
              class="form-input"
              type="text"
              placeholder="filter..."
              onInput={(event) => this.handleChange(event)} />
        </div>
      </form>
    );
  }
}