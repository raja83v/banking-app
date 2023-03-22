import React from "react";
import { Title } from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import "@ui5/webcomponents/dist/TableCell";
import "@ui5/webcomponents/dist/Button";

export function CustomerList() {
  return (
    <div>
      <div>
        <span>
          Products table - resize your browser to make some columns pop-in
        </span>
      </div>

      <ui5-table class="demo-table" id="table">
        <ui5-table-column slot="columns">
          <span>Product</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="800">
          <span>Supplier</span>
        </ui5-table-column>

        <ui5-table-column slot="columns">
          <span>Dimensions</span>
        </ui5-table-column>

        <ui5-table-column slot="columns">
          <span>Weight</span>
        </ui5-table-column>

        <ui5-table-column slot="columns">
          <span>Price</span>
        </ui5-table-column>
      </ui5-table>
    </div>
  );
}
