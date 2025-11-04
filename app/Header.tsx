export default function Header() {
  return (
    <header className="w-full bg-white h-15">
      <div className="container mx-auto flex items-center justify-between h-full px-4 md:px-0">
        <img src="https://assetwise.co.th/wp-content/themes/seed-spring/img/asw-logo_horizontal.svg" alt="AssetWise Logo" className="w-[120px] h-auto" />
        <ul className="flex items-center justify-center gap-4">
          <li><a href="/">Home</a></li>
          <li><a href="#main-objective">Concept</a></li>
          <li><a href="#form">Submit</a></li>
        </ul>
      </div>
    </header>
  );
}