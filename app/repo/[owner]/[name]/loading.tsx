const Loading = () => {
  return (
    <section className="mx-auto  px-6 py-10 animate-pulse">
      <div className="mb-8 h-4 w-36 rounded bg-gray-200" />

      <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="size-14 rounded-full bg-gray-200" />

          <div className="space-y-2">
            <div className="h-4 w-24 rounded bg-gray-200" />
            <div className="h-7 w-48 rounded bg-gray-200" />
          </div>
        </div>

        <div className="mt-6 h-4 w-2/3 rounded bg-gray-200" />

        <div className="mt-8 flex gap-4 border-t border-gray-200 pt-5">
          <div className="h-4 w-20 rounded bg-gray-200" />
          <div className="h-4 w-20 rounded bg-gray-200" />
          <div className="h-4 w-20 rounded bg-gray-200" />
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_260px]">
        <div className="h-96 rounded-2xl bg-gray-200" />
        <div className="h-72 rounded-2xl bg-gray-200" />
      </div>
    </section>
  );
};


export default Loading;