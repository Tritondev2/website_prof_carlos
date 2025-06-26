export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-auto">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Professor Carlos André. Todos os direitos reservados.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/PatoCareca1/prof-carlos-website" className="hover:text-white transition">
            GitHub
          </a>
          <a href="/contato" className="hover:text-white transition">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}