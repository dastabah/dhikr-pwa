# Digital Zawiya - Progressive Web App

A beautiful, functional PWA for spiritual practice and learning, built according to Blueprint v23.

## 🌙 Features

- **Daily Wird Practice**: Guided dhikr counter with haptic feedback (Mode B: Serene Visual, Mode C: Haptic Hudoor)
- **Educational Content**: Organized curriculum in "My Path" module
- **Spiritual Lineage**: Learn about the great masters in "My Silsilah"
- **Offline Support**: Works completely offline after first load
- **Installable**: Add to home screen on mobile devices
- **Responsive**: Works on mobile, tablet, and desktop

## 🚀 Quick Start

### Option 1: Simple Local Testing

1. **Install a simple server** (if you don't have one):
   ```bash
   npm install -g serve
   ```

2. **Run the app**:
   ```bash
   serve -s . -l 3000
   ```

3. **Open in browser**:
   ```
   http://localhost:3000
   ```

### Option 2: Using Python

If you have Python installed:

```bash
# Python 3
python -m http.server 3000

# Then visit http://localhost:3000
```

### Option 3: Using Node.js http-server

```bash
npx http-server . -p 3000
```

## 📱 Installing as PWA

### On Mobile (iOS)

1. Open the app in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

### On Mobile (Android)

1. Open the app in Chrome
2. Tap the three-dot menu
3. Tap "Add to Home screen" or "Install app"
4. Tap "Add"

### On Desktop (Chrome/Edge)

1. Open the app in Chrome or Edge
2. Look for the install icon in the address bar
3. Click "Install"

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow prompts** to link your project

4. **For production**:
   ```bash
   vercel --prod
   ```

### Deploy to Netlify

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   netlify deploy
   ```

3. **For production**:
   ```bash
   netlify deploy --prod
   ```

### Deploy to GitHub Pages

1. **Create a GitHub repository**
2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/digital-zawiya.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Select "main" branch
   - Save

## 📁 File Structure

```
digital-zawiya/
├── index.html              # Main HTML file
├── digital-zawiya.jsx      # React app component
├── service-worker.js       # PWA offline functionality
├── manifest.json           # PWA manifest
├── package.json            # Project metadata
└── README.md               # This file
```

## 🔧 How It Works

### Technology Stack

- **React 18**: UI framework (loaded from CDN)
- **Tailwind CSS**: Styling (loaded from CDN)
- **Lucide React**: Icons
- **Service Worker**: Offline caching
- **LocalStorage**: User preferences and progress

### Key Components

1. **Onboarding Flow**: One-time welcome screens introducing the foundations
2. **Wird Counter**: Two modes (Serene Visual & Haptic Hudoor) with haptic/visual feedback
3. **Bottom Navigation**: Persistent 4-tab navigation (Home, My Path, My Silsilah, Settings)
4. **Expandable Cards**: All content uses in-place expansion (no page navigation)
5. **LocalStorage Persistence**: All settings and progress saved locally

## 🎨 Customization

### Changing Colors

Edit the Tailwind classes in `digital-zawiya.jsx`:

```jsx
// Current primary: emerald-600 (#059669)
// Current secondary: teal-600 (#0d9488)

// Search and replace with your preferred Tailwind colors
```

### Adding Content

All content is stored in JavaScript arrays at the top of `digital-zawiya.jsx`:

- `DHIKR_DATA`: The three dhikr and their details
- `FOUNDATION_CARDS`: The four foundation teachings
- `SILSILAH_FIGURES`: Spiritual masters and their teachings
- `MY_PATH_SECTIONS`: Curriculum sections

### Changing Fonts

To use a different Arabic font, edit the Google Fonts import in `index.html`:

```html
<!-- Current: Amiri -->
<link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" rel="stylesheet">

<!-- Alternative: Scheherazade New -->
<link href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap" rel="stylesheet">
```

## 🧪 Testing Checklist

- [ ] Onboarding appears on first launch
- [ ] Can complete full wird flow (3 dhikr + muraqabah)
- [ ] Counter increments correctly
- [ ] Haptic feedback works on Android (visual flash on iOS)
- [ ] Bottom navigation switches between all 4 tabs
- [ ] All cards expand/collapse smoothly
- [ ] Settings persist after closing and reopening
- [ ] App works offline after first load
- [ ] App is installable on mobile
- [ ] All content is readable and formatted correctly

## 🐛 Troubleshooting

### App won't install as PWA

- Make sure you're accessing via HTTPS (or localhost)
- Check that service worker registered successfully (open DevTools > Application > Service Workers)
- Verify manifest.json is loading correctly

### Haptic feedback not working

- Haptics only work on Android devices
- iOS devices will see visual flashes instead
- Check that haptic feedback is enabled in Settings

### Content not displaying

- Check browser console for errors
- Verify all CDN resources are loading
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Offline mode not working

- Service worker needs HTTPS or localhost to register
- May need to refresh twice after first load
- Check DevTools > Application > Service Workers

## 📝 Development Notes

### Why CDN instead of npm?

This prototype uses CDN links for simplicity and portability:
- No build step required
- No node_modules folder
- Easy to deploy anywhere
- Perfect for rapid prototyping

For production, consider migrating to a proper build setup with Vite or Create React App.

### Browser Support

- Chrome/Edge: Full support
- Safari: Full support (with visual feedback instead of haptics)
- Firefox: Full support
- iOS Safari: Full support (PWA installation works)
- Android Chrome: Full support (PWA installation works)

## 🎯 MVP Scope

This prototype includes:

✅ Core wird functionality (Mode B & C)
✅ Onboarding flow
✅ Foundation cards
✅ My Path curriculum
✅ My Silsilah with 6 figures
✅ Settings with persistence
✅ Offline support
✅ PWA installability

Not included in MVP (future versions):

❌ Mode A (Physical Tasbih Companion)
❌ Guided "Spiritual Shower" flow
❌ Weekly Awrad Reader
❌ Push notifications
❌ User accounts/authentication
❌ Community features
❌ Advanced progress visualization

## 🤲 Contributing

To improve this prototype:

1. Test thoroughly on multiple devices
2. Report bugs or suggest improvements
3. Consider user feedback from actual murids
4. Prioritize simplicity and usability
5. Maintain focus on the core mission: consistent practice and learning

## 📜 License

MIT License - feel free to use, modify, and distribute.

## 🌟 Acknowledgments

Built with the intention of serving the murids and facilitating consistent spiritual practice. May Allah accept this effort and make it a means of guidance and purification.

---

**For questions or support**: Check the comments in the code or refer to the Blueprint v23 document.

**May this tool be a springboard for your Tazkiyah** 🌙
