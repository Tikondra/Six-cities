import * as React from "react";
import * as renderer from "react-test-renderer";
import OfferGallery from "./offer-gallery";

it(`should render OfferGallery`, function () {
  const tree = renderer
    .create(
        <OfferGallery
          pictures={[`img/apartment-02.jpg`, `img/apartment-01.jpg`, `img/apartment-03.jpg`]}
          title={`Beautiful & luxurious apartment at great location`}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
