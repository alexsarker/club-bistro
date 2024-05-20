const Cover = ({ img, heading, subHeading }) => {
  return (
    <div
      className={`hero h-[400px] rounded-xl`}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-content text-white text-center bg-black bg-opacity-60 px-48 py-16">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-4xl uppercase">{heading}</h1>
          <small>{subHeading}</small>
        </div>
      </div>
    </div>
  );
};

export default Cover;
