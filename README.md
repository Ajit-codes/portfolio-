# Personal Portfolio Website

A clean, responsive portfolio website template built with HTML, Tailwind CSS, and JavaScript. This template is designed to showcase your professional skills, projects, and contact information.

## Features

- Modern and clean design using Tailwind CSS
- Fully responsive layout (mobile-friendly)
- Smooth scrolling navigation
- Interactive contact form
- Project showcase section
- Skills display
- Animated elements using Intersection Observer
- Mobile menu for smaller screens
- Social media links

## How to Use

1. **Download or Clone the Repository**
   
   Download the files or clone this repository to your local machine.

2. **Customize the Content**

   - Open `index.html` and replace the placeholder text and images with your own information.
   - Update the "Your Name" text in various places to your actual name.
   - Replace the placeholder project information with details about your real projects.
   - Update your skills in the skills section.
   - Add your real contact information and social media links.

3. **Add Your Images**

   - Replace the placeholder profile image in the About section.
   - Add real images of your projects in the Projects section.
   - Consider adding a favicon for your website.

4. **Customize the Colors (Optional)**

   If you want to change the color scheme:
   - Look for the Tailwind configuration in the `<head>` section of `index.html`:
     ```js
     tailwind.config = {
         theme: {
             extend: {
                 colors: {
                     primary: '#4f46e5',
                     secondary: '#3730a3',
                     /* other colors */
                 }
             }
         }
     }
     ```
   - Modify these color values to match your preferred color scheme.

5. **Testing the Website**

   - Open `index.html` in a web browser to see your website.
   - Test the responsiveness by resizing the browser window.
   - Make sure all links work correctly.
   - Test the contact form functionality.

## Deployment

To make your portfolio available online, you can deploy it using any of these options:

1. **GitHub Pages**: If you have a GitHub account, push your portfolio to a repository and enable GitHub Pages.

2. **Netlify**: Drag and drop your project folder to Netlify's dashboard for quick deployment.

3. **Vercel**: Connect your portfolio repository to Vercel for automatic deployment.

4. **Traditional Web Hosting**: Upload the files to your web hosting service using FTP.

## Customizing the Form

The contact form in this template is set up for demonstration purposes. To make it actually send emails, you'll need to:

1. Create a server-side script to process the form (using PHP, Node.js, or similar).
2. Update the form's action attribute in the HTML.
3. Implement proper form validation on the server side.

Alternatively, you can use form service providers like Formspree, FormSubmit, or Netlify Forms.

## Advanced Customization

This portfolio uses Tailwind CSS via CDN for simplicity. For production sites, consider:

1. Installing Tailwind CSS via npm for better optimization
2. Setting up a build process with tools like PostCSS
3. Purging unused CSS for smaller file sizes
4. Creating custom components for reusability

## Browser Support

This template works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is available for personal and commercial use. You're free to modify and adapt it to your needs.

## Credits

- Tailwind CSS for the utility-first styling
- Font Awesome for the icons
- Placeholder images from placeholder.com 