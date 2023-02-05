const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://media.istockphoto.com/id/1360682307/photo/james-webb-telescope-in-outer-space-elemets-of-thisd-iamge-furnished-by-nasa-3d-rendering.jpg?s=612x612&w=0&k=20&c=9zzhX3dVFaJEuSArKTwcH_AetIRR4k9xwmgqIih8iyk="
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://media.istockphoto.com/id/1360682307/photo/james-webb-telescope-in-outer-space-elemets-of-thisd-iamge-furnished-by-nasa-3d-rendering.jpg?s=612x612&w=0&k=20&c=9zzhX3dVFaJEuSArKTwcH_AetIRR4k9xwmgqIih8iyk="
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://media.istockphoto.com/id/1360682307/photo/james-webb-telescope-in-outer-space-elemets-of-thisd-iamge-furnished-by-nasa-3d-rendering.jpg?s=612x612&w=0&k=20&c=9zzhX3dVFaJEuSArKTwcH_AetIRR4k9xwmgqIih8iyk="
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://media.istockphoto.com/id/1360682307/photo/james-webb-telescope-in-outer-space-elemets-of-thisd-iamge-furnished-by-nasa-3d-rendering.jpg?s=612x612&w=0&k=20&c=9zzhX3dVFaJEuSArKTwcH_AetIRR4k9xwmgqIih8iyk="
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
