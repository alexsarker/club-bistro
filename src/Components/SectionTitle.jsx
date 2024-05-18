const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="space-y-4 text-center mb-12">
      <p className="italic text-main text-xl">---{subHeading}---</p>
      <hr className="border-2 w-72 mx-auto" />
      <h2 className="text-4xl uppercase">{heading}</h2>
      <hr className="border-2 w-72 mx-auto" />
    </div>
  );
};

export default SectionTitle;
