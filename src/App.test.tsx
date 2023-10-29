import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import MobileMenu from "./layout/mobile-menu/MobileMenu";

describe("App should", () => {
  it("render MobileMenu", () => {
    render(<MobileMenu />);
  });
});
