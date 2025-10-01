# Studio Ghibli Films App

A modern, responsive React application for exploring and managing your favorite Studio Ghibli films. Built with React, React Router, and Bootstrap, this app provides an immersive experience for discovering the magical world of Studio Ghibli movies.

## 🎬 Features

### Film Discovery
- **Browse Films**: Explore the complete collection of Studio Ghibli films
- **Director Filtering**: Filter films by director (Hayao Miyazaki, Isao Takahata, etc.)
- **Film Statistics**: View average ratings, total films, and latest releases
- **Detailed Views**: Click any film to see comprehensive details including descriptions, ratings, and release information

### Personal Watchlist
- **Add to Watchlist**: Save your favorite films for later viewing
- **Manage Collection**: Remove films from your watchlist
- **Visual Indicators**: Clear status indicators for films already in your watchlist
- **Persistent Storage**: Your watchlist persists across browser sessions

### Modern UI/UX
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant fade-in and slide-up transitions
- **Interactive Cards**: Hover effects and visual feedback
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Color Palette**: Custom theme based on React blue and Studio Ghibli aesthetics

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (Loader, FilmCard)
│   ├── layout/         # Layout components (TopNav, MainLayout)
│   └── index.js        # Component exports
├── contexts/           # React Context providers
│   └── WatchlistContext.jsx
├── helpers/            # Utility functions
│   └── filmHelpers.js
├── pages/              # Page components
│   ├── HomePage.jsx
│   ├── FilmsPage.jsx
│   └── SingleFilmPage.jsx
├── styles/             # CSS files
│   ├── global.css
│   ├── filmCard.css
│   └── loader.css
└── utils/              # Utility files
    └── reportWebVitals.js
```

## 🎨 Design System

### Color Palette
- **Primary**: React Blue (#61DAFB) - Modern, tech-forward
- **Secondary**: TrueCoders Dark (#2C3E50) - Professional, trustworthy
- **Accent**: TrueCoders Red (#E74C3C) - Energetic, attention-grabbing
- **Neutrals**: Carefully selected grays for text and backgrounds

### Typography
- **Font Family**: System fonts for optimal performance
- **Hierarchy**: Clear heading structure with proper sizing
- **Readability**: Optimized line heights and spacing

### Components
- **Modern Cards**: Rounded corners, subtle shadows, hover effects
- **Interactive Buttons**: Gradient backgrounds, smooth transitions
- **Responsive Grid**: Flexible layouts that adapt to screen size
- **Loading States**: Elegant spinner animations

## 🧪 Testing

The project includes comprehensive test coverage using Jest and React Testing Library:

- **Component Tests**: Individual component functionality
- **Context Tests**: Watchlist state management
- **Helper Tests**: Utility function validation
- **Integration Tests**: User interaction flows

Run tests with:
```bash
npm test
```

## 🌐 API Integration

The app integrates with the [Studio Ghibli API](https://studioghibliapi-d6fc8.web.app/) to fetch:
- Complete film catalog
- Individual film details
- Director information
- Release dates and ratings

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Responsive design for all screen sizes
- **Touch Friendly**: Large tap targets and intuitive gestures
- **Performance**: Optimized images and lazy loading

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **React Router** - Client-side routing
- **React Bootstrap** - UI component library
- **CSS Custom Properties** - Modern CSS variables
- **Jest & React Testing Library** - Testing framework
- **Studio Ghibli API** - External data source

## 🚀 Deployment

The app is ready for deployment to any static hosting service:

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your preferred hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Studio Ghibli](https://www.ghibli.jp/) for creating amazing films
- [Studio Ghibli API](https://studioghibliapi-d6fc8.web.app/) for providing film data
- [React](https://reactjs.org/) and [Bootstrap](https://getbootstrap.com/) communities
- [TrueCoders](https://truecoders.io/) for inspiration and guidance

---

**Made with ❤️ and React**