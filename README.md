# FukerJS

FukerJS is a fun and sarcastic open-source package that allows you to generate a middle finger emoji with different skin tones and detect whether a given string contains a middle finger emoji.

## 🚀 Features

- **Generate Middle Finger**: Get a random or specific skin tone middle finger emoji.
- **Detect Middle Finger**: Check if a string contains a middle finger emoji.

## 📦 Installation

You can install FukerJS using npm or yarn:

```sh
npm install fukerjs
```

or

```sh
yarn add fukerjs
```

## 🛠️ Usage

Import and use the package in your JavaScript or TypeScript project:

```ts
import faker from "fukerjs";

// Generate a middle finger emoji (default: dark skin tone)
console.log(faker.generateMiddleFinger()); // 🖕🏿

// Generate a middle finger emoji with a specific skin tone
console.log(faker.generateMiddleFinger({ skinTone: 1 })); // 🖕🏻
console.log(faker.generateMiddleFinger({ skinTone: 3 })); // 🖕🏽

// Check if a string contains a middle finger emoji
console.log(faker.isMiddleFinger("🖕")); // true
console.log(faker.isMiddleFinger("👍")); // false
```

## 🎨 Skin Tone Guide

| Skin Tone Option | Emoji |
| ---------------- | ----- |
| 1                | 🖕    |
| 2                | 🖕🏻  |
| 3                | 🖕🏼  |
| 4                | 🖕🏽  |
| 5                | 🖕🏾  |
| Default (6)      | 🖕🏿  |

## 📜 License

This project is licensed under the **MIT License**.

## ⚠️ Disclaimer

This package is made for fun and should not be used for offensive purposes. Use responsibly and with humor! 🎭

## 🛠️ Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Write tests for your changes if applicable.
5. Open a pull request with a clear description of your changes.

