# Plumbline Builders - Homepage Concept

Static HTML/CSS/JS. No build step.

## Run locally
VS Code > install "Live Server" > right-click index.html > Open with Live Server.

## Deploy
1. Push this folder to a GitHub repo.
2. vercel.com > Add New Project > import repo > Framework: Other > Deploy.

## Replace images
Every image is an Unsplash placeholder URL in index.html. Swap the src values with client photos.

## WordPress / Elementor mapping
Each section has an HTML comment naming the matching widget:
Top bar / Header / Footer -> Theme Builder templates
Hero -> Container + Heading + Button + Image
Marquee -> Elementor marquee or CSS class
3 service cards -> Image Box (3 columns)
Residential grid -> Icon Box (3-4 columns)
Trades -> Tabs widget (vertical)
Before/After -> Before After Slider addon
Stats -> Counter widget
Process -> Icon List / Timeline
Gallery -> Gallery (Masonry)
Reviews -> Testimonial Carousel
Estimate -> Form widget

## Design tokens
Colors: Blueprint Navy #0B2545, Deep Blue #13315C, Plaster #F4F6F3, Concrete #D5DAD3, Brass #C8892B, Draft Blue #3E7CB1
Fonts: Big Shoulders Display (headings), Hanken Grotesk (body) - both Google Fonts, available in Elementor.
