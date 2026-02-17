<div align="center">

# 🍅 PomoStudy

**A modern, customizable Pomodoro timer web application for enhanced productivity**

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Customization](#-customization) • [Technologies](#-technologies)

</div>

---

## 📋 About

**PomoStudy** is a fully-featured Pomodoro technique timer built with React. It helps you manage your time effectively by breaking work into focused intervals (traditionally 25 minutes) separated by short breaks. The app features a clean, modern interface with customizable themes and intervals.

The Pomodoro Technique is a time management method that uses a timer to break work into intervals, improving focus and productivity while preventing burnout.

---

## ✨ Features

### ⏱️ **Timer Functionality**
- **Pomodoro Mode** - Default 25-minute focused work session
- **Short Break** - 5-minute rest period after each pomodoro
- **Long Break** - 10-minute extended rest after completing multiple pomodoros
- **Automatic Stage Transitions** - Seamlessly cycles through work and break periods
- **Pause/Resume** - Full control over your timer with start/pause functionality

### 🎨 **Customization Options**
- **Theme Colors** - Choose from three color schemes:
  - 🔴 Red (default)
  - 🔵 Blue
  - 🟣 Purple
- **Typography** - Multiple font options for personalized reading comfort:
  - Kumbh Sans (default)
  - Roboto Slab
  - Space Mono
- **Adjustable Time Intervals** - Configure durations for:
  - Pomodoro sessions (1-60 minutes)
  - Short breaks (1-60 minutes)
  - Long breaks (1-60 minutes)

### 🔔 **User Experience**
- **Sound Notifications** - Audio alert when a stage completes
- **Visual Indicators** - Color-coded timer border matching selected theme
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Progress Tracking** - Automatic counting of completed pomodoros
- **Dynamic Page Title** - Shows remaining time in browser tab

---

## 🎯 Demo

### Desktop View
The app features a circular timer display with a clean, minimalist interface:
- Large, easy-to-read countdown display
- Tab navigation for different timer modes
- Settings panel for customization
- Smooth animations and transitions

### Mobile Responsive
Fully optimized for mobile devices with touch-friendly controls and adaptive layout.

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/gbatistaa/pomodoro-app.git
   cd pomodoro-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 💻 Usage

### Starting a Pomodoro Session

1. **Select Mode** - Click on "pomodoro", "short break", or "long break" tab
2. **Configure Settings** (optional) - Click the ⚙️ settings icon to customize:
   - Time durations
   - Color theme
   - Font style
3. **Start Timer** - Click the "START" button
4. **Work/Rest** - Focus during pomodoro, rest during breaks
5. **Repeat** - The app automatically cycles through stages

### Keyboard Shortcuts

While the timer interface is focused:
- **Space** - Start/Pause timer (via button click)

### Settings Configuration

**Time Settings:**
- Use ⬆️ and ⬇️ arrows to adjust minutes (0-60 range)
- Changes apply after clicking "Apply"

**Visual Settings:**
- Select your preferred font style
- Choose theme color (affects timer border and accents)

---

## 🎨 Customization

### Default Time Values

```javascript
Pomodoro: 25 minutes
Short Break: 5 minutes
Long Break: 10 minutes
```

### Long Break Trigger

By default, a **long break** occurs after completing **3 pomodoros**. This follows the traditional Pomodoro Technique pattern.

### Theme Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| Red | `#F87070` | Default theme |
| Cyan | `#70F3F8` | Alternative theme |
| Purple | `#D881F8` | Alternative theme |

---

## 🛠️ Technologies

### Core Technologies

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 18.x |
| **JavaScript (ES6+)** | Programming Language | - |
| **CSS3** | Styling & Animations | - |
| **HTML5** | Markup | - |

### React Features Used

- **Hooks** - useState, useRef, useEffect, useContext, useCallback
- **Context API** - Global state management for:
  - Color theme
  - Font selection
  - Time settings
  - Timer state
  - Active/pause state
- **Custom Hooks** - `useMyHook` for interval-based timer logic
- **React.memo** - Performance optimization for Header component

### Build Tools

- **Create React App** - Zero-config build setup
- **Webpack** - Module bundler (via CRA)
- **Babel** - JavaScript compiler (via CRA)

---

## 📁 Project Structure

```
pomodoro-app/
├── public/
│   ├── index.html           # HTML template
│   ├── clock.png            # App icon
│   └── manifest.json        # PWA manifest
├── src/
│   ├── assets/
│   │   ├── images/          # Icon assets
│   │   └── sounds/          # Notification sound
│   ├── components/
│   │   ├── PomoClock.jsx    # Main timer component
│   │   ├── PomoNav.jsx      # Stage navigation tabs
│   │   └── config/
│   │       └── components/  # Settings components
│   ├── styles/
│   │   ├── pomoClock.module.css
│   │   ├── pomoNav.module.css
│   │   └── pomoConfig.module.css
│   ├── Functions/
│   │   └── sound.js         # Audio notification handler
│   ├── App.js               # Root component with Context providers
│   ├── App.css              # Global styles
│   └── index.js             # Application entry point
└── package.json
```

---

## 🧩 Component Architecture

### Context Providers

The app uses React Context API for state management:

- **ColorContext** - Current theme color
- **FontContext** - Selected font family
- **TimeSettingsContext** - Duration configurations
- **PomoStageContext** - Current stage (pomodoro/break)
- **MinutesContext** - Timer minutes state
- **SecondsContext** - Timer seconds state
- **ActiveContext** - Timer running/paused state

### Key Components

1. **PomoClock** - Main timer display with:
   - Countdown logic
   - Start/Pause button
   - Stage transition handling
   - Sound notification trigger

2. **PomoNav** - Navigation tabs for:
   - Pomodoro mode
   - Short break mode
   - Long break mode

3. **PomoConfig** - Settings modal with:
   - Time configuration
   - Font selection
   - Color theme picker

---

## 🔊 Audio Notifications

The app plays a notification sound when each stage completes. The sound file is located in `src/assets/sounds/` and is triggered automatically during stage transitions.

---

## 📱 Progressive Web App (PWA)

PomoStudy is configured as a PWA with:
- **Manifest file** for installation on mobile devices
- **Service worker** ready (via CRA)
- **Icons** optimized for various screen sizes

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build/` folder.

### Deployment Platforms

Recommended platforms for deploying this React app:

- **Vercel** - Zero-config deployment for React apps
- **Netlify** - Continuous deployment from Git
- **GitHub Pages** - Free hosting for static sites
- **Firebase Hosting** - Fast and secure web hosting

### Deploy to Vercel (Example)

```bash
npm install -g vercel
vercel
```

---

## 🧪 Available Scripts

### Development

```bash
# Start development server
npm start

# Run tests
npm test

# Run tests in watch mode
npm test -- --watch
```

### Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npx serve -s build
```

### Advanced

```bash
# Eject from Create React App (irreversible)
npm run eject
```

---

## 🎓 The Pomodoro Technique

The Pomodoro Technique was developed by Francesco Cirillo in the late 1980s. The method consists of:

1. ✅ Choose a task to work on
2. ⏰ Set the timer to 25 minutes (one "Pomodoro")
3. 💪 Work on the task until the timer rings
4. ☑️ Take a short 5-minute break
5. 🔄 After 4 pomodoros, take a longer 15-30 minute break

### Benefits

- 🎯 Improved focus and concentration
- ⚡ Reduced mental fatigue
- 📈 Better time estimation skills
- 🚫 Minimized distractions
- ✨ Enhanced productivity

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve PomoStudy:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

**Gabriel Batista**

Fullstack Developer passionate about productivity tools and modern web technologies.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gbatistaa)

</div>

---

## 🙏 Acknowledgments

- **Francesco Cirillo** - Creator of the Pomodoro Technique
- **Create React App** - For the excellent React boilerplate
- **React Community** - For the amazing ecosystem and tools

---

<div align="center">

Made with ❤️ and ☕

**Stay focused, stay productive!** 🍅

</div>