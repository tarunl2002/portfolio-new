'use client';
export default function CommandSnippet({ command }: { command: string }) {
  return (
    <div className="bg-white/10 font-mono text-sm px-5 py-2 rounded-md border border-white/20 inline-block shadow-md text-white">
      {command}
    </div>
  );
}
