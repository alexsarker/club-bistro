import BanImg from "/src/assets/home/chef-service.jpg";

const Board = () => {
  return (
    <div
      className="hero min-h-screen rounded-xl"
      style={{
        backgroundImage: `url(${BanImg})`,
      }}
    >
      <div className="hero-content text-center bg-white px-72 py-24">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl cinzel">Club Bistro</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Board;
