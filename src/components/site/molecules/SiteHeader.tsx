const SiteHeaderPresentational = () => {
  return (
    <header className="flex items-center justify-between p-5 shadow">
      <h1 className="text-3xl font-bold select-none">StopWatchs</h1>
    </header>
  );
};

export const SiteHeader = () => {
  return <SiteHeaderPresentational />;
};
