# React Resize Listener

## Demo

[Check out the demo.](https://stackblitz.com/edit/react-nrlzrm)

## Installation

`npm i react-resize-listener`

## Usage

This component uses an `<iframe />` component under the hood that is positioned absolutely to fill a container to listen for resize events on its `contentWindow`.

Be sure to set `position: relative;` on the parent container that you want to listen on, and be aware of any other positioned containers that might be in between.

## Debug mode

You can add `debug` to the `ResizeListener` component to show an outline around the resize listener container, and it will automatically `console.log()` every time the `onResize` event fires. This can be useful if you aren't sure whether the listener is filling the container you think it is.

## Example

```jsx

import React, {Component} from "react";
import {ResizeListener} from "react-resize-listener";

const ResizableComponent = (props) => (
  <div className="might-resize" style={{position: "relative"}}>
    <p>
      This container might resize for whatever reason, and
      we might want to know when it does and the dimensions
      when it does
    </p>
    <ResizeListener debug onResize={props.doSomething} />
  </div>
)

```
