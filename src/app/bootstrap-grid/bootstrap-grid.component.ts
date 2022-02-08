import { Component } from "@angular/core";

@Component({
  selector: 'bootstrap-grid',
  template: `
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col"><button class="btn btn-success btn-block">1</button></div>
        <div class="col"><button class="btn btn-success btn-block">2</button></div>
        <div class="col"><button class="btn btn-success btn-block">3</button></div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-12 col-md-6"><button class="btn btn-success btn-block">1</button></div>
        <div class="col-lg-12 col-md-6">
          <div class="row">
            <div class="col-4">
              <button class="btn btn-success btn-block">4</button>
            </div>
            <div class="col-4">
            <button class="btn btn-success btn-block">4</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class BootstrapGrid {

}
