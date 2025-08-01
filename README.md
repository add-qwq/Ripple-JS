# Ripple-JS
# 按钮点击涟漪效果库

## English

### Ripple-JS

A lightweight JavaScript library that adds beautiful ripple animation effects to buttons when clicked, enhancing user interaction feedback with smooth visual transitions.

![GitHub license](https://img.shields.io/github/license/add-qwq/Ripple-JS?style=flat-square)

This library automatically injects necessary styles and attaches ripple effects to all button elements on a page. It also monitors DOM changes to apply ripple effects to dynamically added buttons, ensuring consistent interaction experiences across your entire web application.

### Key Features

- **Automatic Initialization**: Automatically applies ripple effects to all button elements on page load
- **Dynamic DOM Monitoring**: Detects new buttons added to the DOM and applies ripple effects automatically
- **Self-contained Styles**: Injects required CSS styles dynamically, no external style sheets needed
- **Smooth Animations**: Uses CSS animations for performance-optimized ripple effects
- **No Dependencies**: Lightweight implementation with no external library requirements
- **Responsive Effects**: Ripple origin matches exact click position for natural-looking feedback

### How It Works

Ripple-JS creates a circular ripple effect that emanates from the exact click position on button elements:

1. **Style Injection**: Adds necessary CSS styles to the document head for ripple effect rendering
2. **Element Preparation**: Adds required classes and container elements to buttons
3. **Event Handling**: Listens for mousedown events to trigger ripple animations
4. **Animation Management**: Creates, animates, and cleans up ripple elements automatically
5. **DOM Observation**: Uses MutationObserver to detect new buttons and apply effects dynamically

### Usage

#### Basic Integration

1. Include the ripple.js script in your HTML document:
   ```html
   <script src="path/to/ripple.js"></script>
   ```

2. The library automatically initializes when the DOM content is loaded. All existing buttons will have ripple effects applied, and any new buttons added dynamically will also get ripple effects automatically.

#### No Additional Configuration Needed

Ripple-JS works out of the box with default settings. Simply include the script, and all buttons will immediately have ripple effects on click.

### Customization

You can customize the ripple effect by modifying the generated CSS variables or overriding the default styles. For example:

```css
/* Custom ripple color and animation duration */
.ripple__dot {
    background-color: rgba(0, 123, 255, 0.3); /* Blue tint */
    animation: ripple-animation 1s ease-out forwards; /* Longer animation */
}

@keyframes ripple-animation {
    to {
        opacity: 0;
        transform: scale(3); /* Larger ripple */
    }
}
```

### API Reference

#### injectRippleStyles()
Injects the required CSS styles into the document head if they don't already exist. Automatically called during initialization.

#### addRippleToButton(button)
Adds ripple effect capabilities to a specific button element. Adds necessary classes and event listeners.

#### initRippleEffects()
Initializes ripple effects for all existing button elements in the DOM. Automatically called during initialization.

#### observeDOMChanges()
Sets up a MutationObserver to detect new button elements added to the DOM and apply ripple effects to them. Automatically called during initialization.

### Compatibility

Ripple-JS works with all modern browsers that support:
- CSS animations
- MutationObserver
- getBoundingClientRect
- addEventListener

Supported browsers include:
- Chrome 26+
- Firefox 14+
- Edge 12+
- Safari 7+
- Opera 15+

### License

This project is licensed under the [Apache License 2.0](LICENSE).

---

## 中文

### Ripple-JS

一个轻量级JavaScript库，为按钮点击添加精美的涟漪动画效果，通过流畅的视觉过渡增强用户交互反馈。

![GitHub license](https://img.shields.io/github/license/add-qwq/Ripple-JS?style=flat-square)

该库自动注入必要样式，并为页面上的所有按钮元素添加涟漪效果。它还会监控DOM变化，为动态添加的按钮应用涟漪效果，确保整个Web应用中交互体验的一致性。

### 核心功能

- **自动初始化**：页面加载时自动为所有按钮元素应用涟漪效果
- **动态DOM监控**：检测添加到DOM的新按钮并自动应用涟漪效果
- **内置样式**：动态注入所需CSS样式，无需外部样式表
- **流畅动画**：使用CSS动画实现性能优化的涟漪效果
- **无依赖**：轻量级实现，无需外部库支持
- **响应式效果**：涟漪原点与精确点击位置匹配，呈现自然反馈

### 工作原理

Ripple-JS创建从按钮元素上精确点击位置发出的圆形涟漪效果：

1. **样式注入**：将必要的CSS样式添加到文档头部，用于渲染涟漪效果
2. **元素准备**：为按钮添加所需的类和容器元素
3. **事件处理**：监听mousedown事件以触发涟漪动画
4. **动画管理**：自动创建、动画和清理涟漪元素
5. **DOM观察**：使用MutationObserver检测新按钮并动态应用效果

### 使用方法

#### 基本集成

1. 在HTML文档中引入ripple.js脚本：
   ```html
   <script src="path/to/ripple.js"></script>
   ```

2. 库会在DOM内容加载完成后自动初始化。所有现有按钮都会应用涟漪效果，动态添加的新按钮也会自动获得涟漪效果。

#### 无需额外配置

Ripple-JS使用默认设置即可开箱即用。只需包含脚本，所有按钮在点击时立即拥有涟漪效果。

### 自定义

您可以通过修改生成的CSS变量或覆盖默认样式来自定义涟漪效果。例如：

```css
/* 自定义涟漪颜色和动画持续时间 */
.ripple__dot {
    background-color: rgba(0, 123, 255, 0.3); /* 蓝色色调 */
    animation: ripple-animation 1s ease-out forwards; /* 更长的动画 */
}

@keyframes ripple-animation {
    to {
        opacity: 0;
        transform: scale(3); /* 更大的涟漪 */
    }
}
```

### API参考

#### injectRippleStyles()
将所需CSS样式注入文档头部（如果不存在）。初始化时自动调用。

#### addRippleToButton(button)
为特定按钮元素添加涟漪效果功能。添加必要的类和事件监听器。

#### initRippleEffects()
为DOM中所有现有按钮元素初始化涟漪效果。初始化时自动调用。

#### observeDOMChanges()
设置MutationObserver以检测添加到DOM的新按钮元素，并为其应用涟漪效果。初始化时自动调用。

### 兼容性

Ripple-JS兼容所有支持以下功能的现代浏览器：
- CSS动画
- MutationObserver
- getBoundingClientRect
- addEventListener

支持的浏览器包括：
- Chrome 26+
- Firefox 14+
- Edge 12+
- Safari 7+
- Opera 15+

### 许可证

本项目采用[Apache License 2.0](LICENSE)授权。
