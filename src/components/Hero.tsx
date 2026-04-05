const Hero = () => {
  return (
    <section className="bg-secondary py-24 px-6">
      <div className="container mx-auto text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6 leading-tight">
          Automate Your WhatsApp.<br />Grow Your Business.
        </h1>
        <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
          We help e-commerce businesses in Algeria and the MENA region automate customer communication on WhatsApp — so you can sell more, respond faster, and scale effortlessly.
        </p>
        <a
          href="#contact"
          className="inline-block bg-electric hover:bg-electric-light text-primary-foreground font-semibold px-8 py-3 rounded-lg text-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
