import React from "react";

function SelectSizes() {
  return (
    <div>
      <select name="SizeSelect" id="SizeSelectorClothes">
        <option value="">Please select</option>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
        <option value="xxxl">XXXL</option>
      </select>
      <select name="SizeSelect" id="SizeSelectorShoes">
        <option value="">Please select</option>
        <option value="UK5">UK5</option>
        <option value="UK6">UK6</option>
        <option value="UK7">UK7</option>
        <option value="UK8">UK8</option>
        <option value="UK9">UK9</option>
        <option value="UK10">UK10</option>
        <option value="UK11">UK11</option>
        <option value="UK12">UK12</option>
        <option value="UK13">UK13</option>
      </select>
      <select name="SizeSelect" id="SizeSelectorPants">
        <option value="">Please select</option>
        <option value="UK5">W30 L30</option>
        <option value="UK6">W30 L32</option>
        <option value="UK7">W32 L30</option>
        <option value="UK8">W32 L32</option>
        <option value="UK9">W34 L30</option>
        <option value="UK10">W34 L32</option>
        <option value="UK11">W36 L30</option>
        <option value="UK12">W36 L32</option>
        <option value="UK13">W38 L30</option>
      </select>
    </div>
  );
}

export default SelectSizes;