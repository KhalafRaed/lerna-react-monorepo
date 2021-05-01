import React from "react";

export default {
  title: 'Components/Button',
  component: () => <div> Button </div>,
}

export const basicButton = ()=> <button> Basic Button</button>
export const coloredButton = ()=> (
    <>
      <button> Primary Button</button>
    </>
)

export const disabledButton = ()=> (
    <button disabled > Primary Button</button>
)
