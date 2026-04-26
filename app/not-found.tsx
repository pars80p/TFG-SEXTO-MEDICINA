import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <h2 className="text-2xl font-bold mb-4">Página no encontrada</h2>
      <p className="text-slate-600 mb-6">Lo sentimos, no hemos podido encontrar la página que buscas.</p>
      <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
        Volver al inicio
      </Link>
    </div>
  );
}
