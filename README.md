# easy-console-color

Easily add colors and styles to your `console.log` output with simple placeholders. `easy-console-color` translates readable, placeholder-based syntax into ANSI color codes, making your console output both eye-catching and easy to customize.


![Console Colorize Basic Example](https://github.com/AbdullahDalgic/easy-console-color/raw/master/images//futures.gif)


## Features

- Works seamlessly in both **web** and **shell** environments.
- Simple placeholders for text color, background color, and text styles.
- No complex ANSI codes — just intuitive placeholders.
- Lightweight and fast, with seamless integration.

## Installation

Install `easy-console-color`:

```bash
  npm install easy-console-color
  yarn add easy-console-color
```

## Usage
**easy-console-color** works with **console.log()**, **console.error()**, **console.warn()**, and **console.info()** to easily colorize and style your console outputs. Simply add placeholders within the console message string to apply colors and effects.

### Basic Example
```js
import "easy-console-color";

console.log("$(bright)Hello, $(fgCyan)world$(reset)! $(fgYellow)Colorful$(reset) console output made easy.");
```

**Code Output**

![Console Colorize Basic Example](https://github.com/AbdullahDalgic/easy-console-color/raw/master/images//basic-example.jpg)

This example demonstrates how **easy-console-color** interprets placeholders, applying the specified colors and styles to your message. Here’s what each placeholder does:

- **bright**: Brightens or bolds the text.
- **fgCyan**: Changes text color to cyan.
- **fgYellow**: Changes text color to yellow.
- **reset**: Resets all styles.

## Available Colors and Styles

### Foreground Text Colors

bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite

### Background Colors

bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite

### Text Styles

- **bright**: Makes text bright or bold.
- **dim**: Dims the text brightness.
- **underscore**: Underlines the text.
- **blink**: Makes text blink (may not work in all terminals**.
- **reverse**: Reverses the foreground and background colors.
- **hidden**: Hides the text.
- **reset**: Resets all styles and colors.

## Realistic Examples

Here are some more complex and realistic examples to see **easy-console-color** in action:

### Example 1: Styled Warning Message

```js
console.log("$(bright)$(fgRed)Warning:$(reset) $(fgYellow)Disk space is running low!$(reset)");
```

**Code Output**

![Console Colorize Example 1](https://github.com/AbdullahDalgic/easy-console-color/raw/master/images//example-1.jpg)

### Example 2: Success Message with Background

```js
console.log("$(bright)$(fgWhite)$(bgGreen) SUCCESS $(reset) $(fgGreen)Operation completed successfully!$(reset)");
```

**Code Output**

![Console Colorize Example 2](https://github.com/AbdullahDalgic/easy-console-color/raw/master/images//example-2.jpg)

### Example 3: Error Message with Reverse Style

```js
console.log("$(reverse)$(fgRed) ERROR $(reset) $(bright)$(fgRed)File not found!$(reset)");
```

**Code Output**

![Console Colorize Example 3](https://github.com/AbdullahDalgic/easy-console-color/raw/master/images//example-3.jpg)

### Example 4: Information Message with Multiple Styles

```js
console.log("$(fgBlue)INFO:$(reset) $(dim)$(fgCyan)Connecting to the database...$(reset)");
```

**Code Output**

![Console Colorize Example 4](https://github.com/AbdullahDalgic/easy-console-color/raw/master/images//example-4.jpg)

### License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/AbdullahDalgic/easy-console-color/blob/master/LICENSE) file for details.

### Contributing

Contributions are welcome! If you have any suggestions or find any issues, feel free to open an issue or submit a pull request on [GitHub](https://github.com/AbdullahDalgic/easy-console-color).

### Author

Created by [Abdullah Dalgıç](https://abdullahdalgic.com.tr).

### Acknowledgements

Special thanks to all the contributors and open-source projects that made this package possible.
