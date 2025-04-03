# Africa Link Maritime & Logistics Solutions Website

## Project Overview

This is an informational website for Africa Link, a company that provides comprehensive maritime and logistics support services for offshore and port-based operations. The website serves as a resource that outlines how Africa Link assists with fuel supply (bunkering), shipping support, transit services, crew management, and personnel provision.

## Features

- **Responsive Design**: The website is built to work on all devices, from desktop to mobile.
- **Modern UI**: Clean, professional design with Africa Link's signature orange and black color scheme.
- **Service Information**: Detailed pages for each of Africa Link's main services.
- **Bootstrap Framework**: Utilizes Bootstrap for a responsive and modern layout.
- **Multilingual Support**: Internationalization support with translations for English, French, Portuguese, and Arabic.
- **RTL Support**: Right-to-Left language support for Arabic content.

## Directory Structure

```
Africa Link/
├── assets/               # Images and logo
├── css/                  # CSS stylesheets
│   └── main.css          # Main stylesheet with Africa Link branding
├── js/                   # JavaScript files
│   └── translations.js   # Translations and language switching functionality
├── pages/                # Individual service pages
│   ├── fuel-supply.html  # Fuel Supply (Bunkering) page
│   ├── shipping-support.html
│   ├── transit-services.html
│   ├── crew-management.html
│   └── personnel-provision.html
├── index.html            # Homepage
└── README.md             # Project documentation
```

## Technology Stack

- **HTML5**: For structure and content
- **CSS3**: For styling, with a focus on Africa Link's branding
- **Bootstrap 5**: For responsive design components
- **JavaScript**: For interactivity and language switching
- **Bootstrap Icons**: For visual elements and icons
- **Google Analytics**: For tracking site usage

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Open the project**:
   ```
   cd AfricaLink
   ```

3. **View the website**:
   - Open `index.html` in your browser to view the site locally
   - Alternatively, use a local development server:
     ```
     npx serve
     ```

## Development

### Prerequisites

- A modern web browser
- A code editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Making Changes

1. Edit the HTML files to update content
2. Modify `css/main.css` for styling changes
3. Add images to the `assets/` directory as needed
4. Update translations in `js/translations.js` when adding new content

### Translation System

The website includes a comprehensive translation system:

1. **Language Selector**: Located in the navigation bar, allows users to switch between English, French, Portuguese, and Arabic.
2. **Translations Storage**: All translations are stored in `js/translations.js` in a structured JSON format.
3. **Translation Mechanism**:
   - HTML elements use the `data-i18n` attribute to mark text for translation
   - The JavaScript automatically replaces content based on the selected language
   - User language preference is saved in localStorage for persistence

#### Adding New Content with Translation Support

When adding new content that needs translation:

1. Add the `data-i18n` attribute with a unique key to the HTML element:
   ```html
   <h2 data-i18n="my_new_content">My New Content</h2>
   ```

2. Add translations for the key in `js/translations.js`:
   ```javascript
   en: {
     // ...
     "my_new_content": "My New Content"
   },
   fr: {
     // ...
     "my_new_content": "Mon Nouveau Contenu"
   },
   // Add for other languages too
   ```

## Deployment

The website can be deployed to any static web hosting service:

- **GitHub Pages**: Push to a GitHub repository and enable GitHub Pages
- **Netlify/Vercel**: Connect your repository for automatic deployments
- **Traditional Web Hosting**: Upload files via FTP to your hosting provider

## Maintenance

Regular updates should include:

- Updating service information as offerings change
- Ensuring all links remain functional
- Refreshing images periodically
- Checking analytics to improve user experience
- **Maintaining translations** when content is updated

## License

This project is proprietary and owned by Africa Link.

## Contact

For questions or support regarding this website, please contact:
- Email: info@africalink.com
- Phone: +123 456 7890 