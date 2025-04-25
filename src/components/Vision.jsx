function Vision() {
  return (
    <section className="flex justify-between items-center px-10 py-16 space-x-5 bg-primary">
      <div className="max-w-2xl">
        <h2 className="bg-gradient-black-blue text-3xl font-bold">
          Vision Statement
        </h2>
        <p className="text-lg">
          To connect individuals with their dream home through a seamless, user
          friendly platform thtat inspires trust and fosters community.
        </p>
      </div>
      <img
        src="/imgs/vision-img.jpg"
        alt="Vision Image"
        className="w-[422px] h-[422px] aspect-square object-center rounded-full"
      />
    </section>
  );
}

export default Vision;
