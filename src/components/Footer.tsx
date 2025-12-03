export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold">
              <span className="text-primary">MySoc</span>
              <span className="text-foreground">Labs</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Protecting your digital future with advanced cybersecurity solutions
          </p>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} MySocLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
