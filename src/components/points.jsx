import ganYuPoint from "../assets/pctr/ganYuPoint.png";

const Points = () => {
  /*const pointsJson = localStorage.getItem("your answers");
  const doGanYus = () => {
    const points = JSON.parse(pointsJson);
    if (points) {
      let num = 0;
      points.forEach((point) => {
        if (point === true) {
          num = num + 1;
        }
      });
      console.log("num points", num);
      if (num === 1) {
        setClass1("pointColor");
      }
      if (num === 2) {
        setClass1("pointColor");
        setClass2("pointColor");
      }
      if (num === 3) {
        setClass1("pointColor");
        setClass2("pointColor");
        setClass3("pointColor");
      }
      if (num === 4) {
        setClass1("pointColor");
        setClass2("pointColor");
        setClass3("pointColor");
        setClass4("pointColor");
      }
      if (num === 5) {
        setClass1("pointColor");
        setClass2("pointColor");
        setClass3("pointColor");
        setClass4("pointColor");
        setClass5("pointColor");
      }
    }
  };
  useEffect(() => {
    doGanYus();
  });*/

  return (
    <div className="GanYuPoints">
      <img className={"point"} src={ganYuPoint} alt="ganYu" />
      <img className={"point"} src={ganYuPoint} alt="ganYu" />
      <img className={"point"} src={ganYuPoint} alt="ganYu" />
      <img className={"point"} src={ganYuPoint} alt="ganYu" />
      <img className={"point"} src={ganYuPoint} alt="ganYu" />
    </div>
  );
};

export default Points;
