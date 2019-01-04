import * as React from "react";
import { Column } from "../../../lib/acrylic";

describe("<Column />", () => {
  it("Should match the latest snapshots", () => {
    expect(
      <Column>
        <span>Row 1</span>
        <span>Row 2</span>
        <span>Row 3</span>
      </Column>
    ).toMatchSnapshot();
  });
});
