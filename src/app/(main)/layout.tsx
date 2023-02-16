export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mx-32 p-8 flex flex-col h-full max-h-screen w-full">
      <img src="/logo.svg" alt="Logo" className="h-40 w-40" />

      <div className="mb-8 mt-8 p-4 bg-white border border-slate-200 rounded-lg flex overflow-y-auto">
        {children}
      </div>
    </main>
  )
}
