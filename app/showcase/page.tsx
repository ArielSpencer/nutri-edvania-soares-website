export const metadata = {
  robots: 'noindex, nofollow'
};

export default function StyleShowcase() {
  return (
    <main className="w-full min-h-screen bg-bg-primary p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-primary text-text-heading mb-8">Style Showcase</h1>
        <p className="text-text-body mb-8">
          This page demonstrates all the theme elements for testing purposes. 
          See more at: <a href="https://github.com/ArielSpencer/nutri-edvania-soares-website" 
          className="text-accent hover:underline">GitHub repository</a>
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-primary text-accent mb-4">Color Palette</h2>

          <h3 className="text-xl font-primary text-text-heading mb-3">Core Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <ColorCard name="Primary" colorClass="bg-primary" textClass="text-text-body" />
            <ColorCard name="Secondary" colorClass="bg-secondary" textClass="text-text-light" />
            <ColorCard name="Accent" colorClass="bg-accent" textClass="text-text-light" />
          </div>

          <h3 className="text-xl font-primary text-text-heading mb-3">Text Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <ColorCard name="Text Body" colorClass="bg-text-body" textClass="text-text-light" />
            <ColorCard name="Text Heading" colorClass="bg-text-heading" textClass="text-text-light" />
            <ColorCard name="Text Light" colorClass="bg-text-light" textClass="text-text-body" specialContent="Text Sample" />
          </div>

          <h3 className="text-xl font-primary text-text-heading mb-3">Background Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <ColorCard name="BG Primary" colorClass="bg-bg-primary" textClass="text-text-body" border />
            <ColorCard name="BG Secondary" colorClass="bg-bg-secondary" textClass="text-text-body" />
            <ColorCard name="BG Highlight" colorClass="bg-bg-highlight" textClass="text-text-heading" />
          </div>

          <h3 className="text-xl font-primary text-text-heading mb-3">Button Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <ColorCard name="Button Primary" colorClass="bg-btn-primary" textClass="text-text-heading" />
            <ColorCard name="Button Primary Hover" colorClass="bg-btn-primary-hover" textClass="text-text-heading" />
            <ColorCard name="Button Secondary" colorClass="bg-btn-secondary" textClass="text-text-light" />
            <ColorCard name="Button Secondary Hover" colorClass="bg-btn-secondary-hover" textClass="text-text-heading" />
            <ColorCard name="Button Accent" colorClass="bg-btn-accent" textClass="text-text-heading" />
            <ColorCard name="Button Accent Hover" colorClass="bg-btn-accent-hover" textClass="text-text-light" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-primary text-accent mb-4">Button Examples with Animations</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-btn-primary hover:bg-btn-primary-hover text-text-heading py-2 px-6 rounded-md transition-all duration-normal ease-standard">
              Primary Button
            </button>
            <button className="bg-btn-secondary hover:bg-btn-secondary-hover text-text-light hover:text-text-heading py-2 px-6 rounded-md transition-all duration-normal ease-standard">
              Secondary Button
            </button>
            <button className="bg-btn-accent hover:bg-btn-accent-hover text-text-heading hover:text-text-light py-2 px-6 rounded-md transition-all duration-normal ease-emphasized">
              Accent Button
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-primary text-text-heading mb-3">Animation Speed Examples</h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-btn-primary hover:bg-btn-primary-hover text-text-heading py-2 px-6 rounded-md transition-all duration-fast ease-standard">
                Fast Transition
              </button>
              <button className="bg-btn-primary hover:bg-btn-primary-hover text-text-heading py-2 px-6 rounded-md transition-all duration-normal ease-standard">
                Normal Transition
              </button>
              <button className="bg-btn-primary hover:bg-btn-primary-hover text-text-heading py-2 px-6 rounded-md transition-all duration-slow ease-standard">
                Slow Transition
              </button>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-primary text-text-heading mb-3">Easing Function Examples</h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-btn-primary hover:bg-btn-primary-hover text-text-heading py-2 px-6 rounded-md transition-all duration-normal ease-standard">
                Standard Easing
              </button>
              <button className="bg-btn-primary hover:bg-btn-primary-hover text-text-heading py-2 px-6 rounded-md transition-all duration-normal ease-emphasized">
                Emphasized Easing
              </button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-primary text-accent mb-4">Typography Examples</h2>
          <div className="bg-bg-secondary p-6 rounded-lg">
            <h1 className="text-4xl font-primary text-text-heading mb-4">Heading 1</h1>
            <h2 className="text-3xl font-primary text-text-heading mb-4">Heading 2</h2>
            <h3 className="text-2xl font-primary text-text-heading mb-4">Heading 3</h3>
            <h4 className="text-xl font-primary text-text-heading mb-4">Heading 4</h4>
            <p className="text-text-body mb-4">This is a paragraph with the body text color. It uses your primary font and demonstrates the standard text styling for your website.</p>
            <p className="text-accent mb-4">This is a paragraph with the accent color. Notice how it stands out from the regular body text.</p>
            <p className="bg-bg-highlight text-text-heading p-4 rounded-md mb-4">This is a highlighted text block using the background highlight color.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-primary text-accent mb-4">Component Examples</h2>

          <h3 className="text-xl font-primary text-text-heading mb-3">Card Component</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg-primary p-6 rounded-lg shadow-md border border-bg-secondary">
              <h3 className="text-xl font-primary text-text-heading mb-2">Card Title</h3>
              <p className="text-text-body mb-4">This is an example of the card component using the theme colors.</p>
              <button className="bg-btn-primary hover:bg-btn-primary-hover text-text-heading py-1 px-4 rounded-md text-sm transition-all duration-fast ease-standard">
                Learn More
              </button>
            </div>

            <div className="bg-bg-secondary p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-primary text-text-heading mb-2">Alternative Card</h3>
              <p className="text-text-body mb-4">This is an alternative card style using the secondary background color.</p>
              <button className="bg-btn-secondary hover:bg-btn-secondary-hover text-text-light py-1 px-4 rounded-md text-sm transition-all duration-fast ease-standard">
                Learn More
              </button>
            </div>
          </div>

          <h3 className="text-xl font-primary text-text-heading mb-3">Alert Component</h3>
          <div className="mb-4 bg-bg-highlight p-4 rounded-md border-l-4 border-accent">
            <h4 className="text-text-heading font-semibold mb-1">Alert Title</h4>
            <p className="text-text-body">This is an example alert message that uses the theme colors.</p>
          </div>

          <div className="mb-4 bg-bg-primary p-4 rounded-md border border-accent">
            <h4 className="text-accent font-semibold mb-1">Information Notice</h4>
            <p className="text-text-body">This is an alternative alert style for informational messages.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

interface ColorCardProps {
  name: string;
  colorClass: string;
  textClass: string;
  border?: boolean;
  specialContent?: string;
}

function ColorCard({ name, colorClass, textClass, border = false, specialContent }: ColorCardProps) {
  return (
    <div className={`${colorClass} ${border ? 'border border-gray-300' : ''} p-6 rounded-lg h-32 flex flex-col justify-between`}>
      <span className={`${textClass} font-primary font-bold`}>{name}</span>
      {specialContent ? (
        <div className={`${textClass}`}>{specialContent}</div>
      ) : (
        <span className={`${textClass} text-sm`}>{colorClass}</span>
      )}
    </div>
  );
}