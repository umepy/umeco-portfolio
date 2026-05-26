export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-sky-300">
      <div className="flex justify-center">
        <p className="text-sm text-gray-500 pt-10 pb-5">
          Copyright © {year}, Haruya Umemoto
        </p>
      </div>
    </div>
  );
}
