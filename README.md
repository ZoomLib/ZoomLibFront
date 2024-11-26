# dh-zoom

**dh-zoom** is a React library for image zoom previews, allowing users to hover over an image to view a magnified portion of it.
With simple setup and various customization options, it can be used for product image zooming on e-commerce websites, gallery image zooming, and many other purposes.

---

## 📚 Table of Contents

1. [Introduction](#✨-introduction)  
2. [Installation](#⚙️-installation)  
3. [Usage](#🛠️-usage)  
   - [Basic Example](#basic-example)  
4. [Key Features](#🎯-key-features)  
5. [API Reference](#📖-api-reference)    
6. [Contributing](#🤝-contributing)  
7. [License](#📄-license)  

---

## ✨ Introduction

**dh-zoom** is a React component that displays an enlarged image of the hovered area in a circular or rectangular zoom area.  
You can customize the size of the zoom area, zoom level, border style, and more to fit your needs.

---

## ⚙️ Installation

You can install it using `npm` or `yarn`.
```
npm install dh-zoom
or
yarn add dh-zoom
```
---

## 🛠️ Usage

**Basic Example**
Below is a basic example of how to use it.

```
import React from "react";
import "./App.css";
import { ImageZoom } from "../src";  // Import ImageZoom from index.tsx

function App() {
  return (
    <div className="App">
      <h1>Image Zoom Demo</h1>
      <ImageZoom
         src="https://via.placeholder.com/600x400" // Image URL
        zoomLevel={3} // Zoom level (default: 2)
        zoomAreaDimensions={{ width: 200, height: 200 }} // Zoom area dimensions
        containerWidth="600px" // Container width
        containerHeight="400px" // Container height
        border="2px solid rgba(0, 0, 0, 0.5)" // Border style for the zoom area
        borderColor="rgba(0, 0, 0, 0.5)" // Border color for the zoom area
        borderRadius="10px" // Border radius for the zoom area
        backgroundColor="rgba(255, 255, 255, 0.8)" // Background color for the zoom area
      />
    </div>
  );
}

export default App;

```
---

## 🎯 Key Features

```
**Image Zoom Preview**
Displays an enlarged image of the hovered area.

**Customizable Zoom Area**
Adjust the size, shape, and style of the zoom area.

**Zoom Level Adjustment**
Set the zoom level using the zoomLevel property.

**Responsive Design**
Adjust the container size in percentage or fixed dimensions to support various screen sizes.

**Simple Usage**
Easily apply with minimal setup.
```
---

## 📖 API Reference

## ImageZoom Props

| Prop                | Type                           | Default                             | Description                        |
|---------------------|--------------------------------|-------------------------------------|------------------------------------|
| `src`               | `string`                      | **Required**                       | URL of the image to zoom           |
| `zoomLevel`         | `number`                      | `2`                                | Zoom level                        |
| `zoomAreaDimensions`| `{ width: number; height: number }` | `{ width: 200, height: 200 }`     | Width and height of the zoom area           |
| `containerWidth`    | `string`                      | `"100%"`                           | Width of the container (with units)        |
| `containerHeight`   | `string`                      | `"100%"`                           | Height of the container (with units)        |
| `border`            | `string`                      | `"1px solid rgba(0, 0, 0, 0.3)"`  | Border style for the zoom area          |
| `borderColor`       | `string`                      | `"rgba(0, 0, 0, 0.3)"`            | Border color for the zoom area           |
| `borderRadius`      | `string`                      | `"50%"`                            | Border radius of the zoom area            |
| `backgroundColor`   | `string`                      | `"white"`                          | Background color of the zoom area              |

---

## 🤝 Contributing

Create an issue or submit a pull request to contribute to the project.
When fixing bugs or adding features, please include relevant test code.

---

## 📄 License
dh-zoom is distributed under the MIT License.
