# Web-Ripple-JS
# 轻量级点击涟漪效果库

## English

### Web-Ripple-JS

**[Online Demonstration (Click to Access)](https://www.rockaz.top/GitHub-Project-Demo/Web-Ripple-JS/)**  
*Note: The website server is located in China.*

A lightweight JavaScript library that adds elegant ripple animation effects to interactive elements (buttons, links, etc.) when clicked, providing smooth visual feedback for user interactions.

![GitHub license](https://img.shields.io/github/license/add-qwq/Web-Ripple-JS?style=flat-square)

This library automatically applies ripple effects to specified HTML elements, supports dynamic DOM changes, and allows customization of ripple color, quantity limits, and target elements. It works out of the box with zero dependencies.

### Key Features

- **Multi-element Support**: Automatically applies to button, a, input[type="button"], and input[type="submit"] by default
- **Dynamic DOM Detection**: Automatically applies ripple effects to elements added dynamically using MutationObserver
- **Customizable Ripple Color**: Uses default color or custom color via data-ripple-color attribute
- **Ripple Quantity Control**: Limits maximum concurrent ripples to prevent performance issues
- **Exclusion Mechanism**: Skip elements with no-ripple class
- **Zero Dependencies**: Pure vanilla JavaScript implementation, no external libraries required
- **Self-contained Styles**: Dynamically injects necessary CSS, no external stylesheets needed
- **Precise Origin**: Ripple starts exactly from the click position for natural feedback

### How It Works

1. **Style Injection**: Adds required CSS styles to the document head on initialization
2. **Element Initialization**: Attaches ripple capabilities to target elements by adding necessary classes and containers
3. **Event Handling**: Listens for mousedown events to trigger ripple creation
4. **Ripple Generation**: Creates circular ripple elements at click position with calculated size
5. **Animation Management**: Handles ripple expansion animation and automatic cleanup after completion
6. **DOM Monitoring**: Observes DOM changes to apply effects to newly added elements

### Usage

#### Basic Integration

1. Include the script in your HTML:
   ```html
   <script src="path/to/web-ripple.js"></script>
   ```

2. The library initializes automatically when DOMContentLoaded event fires. All target elements will have ripple effects by default.

#### Example Elements

```html
<!-- Default ripple -->
<button>Click Me</button>

<!-- Custom ripple color -->
<a href="#" data-ripple-color="rgba(0, 255, 255, 0.3)">Link with Cyan Ripple</a>

<!-- Excluded from ripple effect -->
<button class="no-ripple">No Ripple Here</button>

<!-- Input buttons are supported too -->
<input type="button" value="Input Button">
<input type="submit" value="Submit Button">
```

### Customization

#### Via Data Attribute

Set custom ripple color for individual elements:
```html
<button data-ripple-color="rgba(255, 100, 100, 0.5)">Red Tint Ripple</button>
```

#### Via CSS Override

Customize animation duration, scale, or other properties:
```css
/* Custom animation duration */
.ripple__dot {
    animation: ripple-animation 1s ease-out forwards;
}

/* Larger ripple scale */
@keyframes ripple-animation {
    to {
        opacity: 0;
        transform: scale(3);
    }
}
```

#### Via Configuration (Modify Source)

Adjust default settings in the RIPPLE_CONFIG object:
```javascript
const RIPPLE_CONFIG = {
    targetTags: ['button', 'a', 'input[type="button"]'], // Modify target elements
    defaultColor: 'rgba(0, 0, 0, 0.2)', // Change default color
    maxActiveRipples: 3, // Adjust maximum concurrent ripples
    observeRoot: document.getElementById('content'), // Change observation root
    excludeClass: 'no-ripple' // Modify exclusion class
};
```

### API Reference

The library exposes a global Ripple object:

#### Ripple.init()
Manually re-initialize ripple effects (useful after manually adding elements without DOM mutation).

```javascript
// Call after adding elements dynamically without DOM mutation
Ripple.init();
```

#### Ripple.destroy()
Removes all ripple effects and event listeners, disconnects the DOM observer.

```javascript
// Clean up ripple effects
Ripple.destroy();
```

### Compatibility

Supports all modern browsers with these features:
- CSS Animations
- MutationObserver
- getBoundingClientRect
- addEventListener

**Supported Browsers:**
- Chrome 26+
- Firefox 14+
- Edge 12+
- Safari 7+
- Opera 15+

### License

This project is licensed under the [Apache License 2.0](LICENSE).

---

## 中文

### Web-Ripple-JS

**[在线演示（点击访问）](https://www.rockaz.top/GitHub-Project-Demo/Web-Ripple-JS/)**  
*注：网站服务器位于中国。*

一个轻量级JavaScript库，为交互元素（按钮、链接等）添加优雅的点击涟漪动画效果，为用户交互提供流畅的视觉反馈。

![GitHub license](https://img.shields.io/github/license/add-qwq/Web-Ripple-JS?style=flat-square)

该库自动为指定的HTML元素应用涟漪效果，支持动态DOM变化，并允许自定义涟漪颜色、数量限制和目标元素。无需依赖其他库，开箱即用。

### 核心功能

- **多元素支持**：默认自动应用于button、a、input[type="button"]和input[type="submit"]
- **动态DOM检测**：使用MutationObserver自动为动态添加的元素应用涟漪效果
- **自定义涟漪颜色**：使用默认颜色或通过data-ripple-color属性设置自定义颜色
- **涟漪数量控制**：限制最大并发涟漪数量，防止性能问题
- **排除机制**：带有no-ripple类的元素会被跳过
- **无依赖**：纯原生JavaScript实现，无需外部库
- **内置样式**：动态注入必要的CSS，无需外部样式表
- **精确原点**：涟漪从精确点击位置开始，提供自然反馈

### 工作原理

1. **样式注入**：初始化时向文档头部添加所需的CSS样式
2. **元素初始化**：通过添加必要的类和容器，为目标元素附加涟漪功能
3. **事件处理**：监听mousedown事件以触发涟漪创建
4. **涟漪生成**：在点击位置创建圆形涟漪元素，并计算合适的大小
5. **动画管理**：处理涟漪扩展动画，并在完成后自动清理
6. **DOM监控**：观察DOM变化，为新添加的元素应用效果

### 使用方法

#### 基本集成

1. 在HTML中引入脚本：
   ```html
   <script src="path/to/web-ripple.js"></script>
   ```

2. 库会在DOMContentLoaded事件触发时自动初始化。所有目标元素默认会具有涟漪效果。

#### 示例元素

```html
<!-- 默认涟漪效果 -->
<button>点击我</button>

<!-- 自定义涟漪颜色 -->
<a href="#" data-ripple-color="rgba(0, 255, 255, 0.3)">青色涟漪链接</a>

<!-- 排除涟漪效果 -->
<button class="no-ripple">无涟漪按钮</button>

<!-- 支持输入按钮 -->
<input type="button" value="输入按钮">
<input type="submit" value="提交按钮">
```

### 自定义

#### 通过数据属性

为单个元素设置自定义涟漪颜色：
```html
<button data-ripple-color="rgba(255, 100, 100, 0.5)">红色调涟漪</button>
```

#### 通过CSS覆盖

自定义动画持续时间、缩放比例或其他属性：
```css
/* 自定义动画持续时间 */
.ripple__dot {
    animation: ripple-animation 1s ease-out forwards;
}

/* 更大的涟漪缩放 */
@keyframes ripple-animation {
    to {
        opacity: 0;
        transform: scale(3);
    }
}
```

#### 通过配置（修改源代码）

在RIPPLE_CONFIG对象中调整默认设置：
```javascript
const RIPPLE_CONFIG = {
    targetTags: ['button', 'a', 'input[type="button"]'], // 修改目标元素
    defaultColor: 'rgba(0, 0, 0, 0.2)', // 更改默认颜色
    maxActiveRipples: 3, // 调整最大并发涟漪数
    observeRoot: document.getElementById('content'), // 更改观察根节点
    excludeClass: 'no-ripple' // 修改排除类
};
```

### API参考

库暴露一个全局Ripple对象：

#### Ripple.init()
手动重新初始化涟漪效果（在不通过DOM突变手动添加元素后很有用）。

```javascript
// 在不通过DOM突变动态添加元素后调用
Ripple.init();
```

#### Ripple.destroy()
移除所有涟漪效果和事件监听器，断开DOM观察器。

```javascript
// 清理涟漪效果
Ripple.destroy();
```

### 兼容性

支持所有具备以下特性的现代浏览器：
- CSS动画
- MutationObserver
- getBoundingClientRect
- addEventListener

**支持的浏览器：**
- Chrome 26+
- Firefox 14+
- Edge 12+
- Safari 7+
- Opera 15+

### 许可证

本项目采用[Apache License 2.0](LICENSE)授权。
