import "./ScheduleResult.css";
import "./knopf.css";
import { useState } from "react";

const ScheduleResult = () => {
  const [posts, setPosts] = useState([]);

  async function getScheduleResultList() {
    await fetch("http://localhost:8080/v1/scheduleResult", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }

  return (
    <div className="schedule">
      <div className="s_btn">
        <button className="knopf" onClick={() => getScheduleResultList()}>
          排班结果
        </button>
      </div>
      <div className="schedule_result">
        <div>名前</div>
        <div>月</div>
        <div>火</div>
        <div>水</div>
        <div>木</div>
        <div>金</div>
        <div>土</div>
        <div>日</div>
      </div>
      {posts.map((reptile, index) => (
        <div key={index} className="schedule_list_result">
          <div>{reptile.name}</div>
          <div>{reptile.scheduleResult["monDay"]}</div>
          <div>{reptile.scheduleResult["tuesDay"]}</div>
          <div>{reptile.scheduleResult["wednesDay"]}</div>
          <div>{reptile.scheduleResult["thursDay"]}</div>
          <div>{reptile.scheduleResult["friDay"]}</div>
          <div>{reptile.scheduleResult["saturDay"]}</div>
          <div>{reptile.scheduleResult["sunDay"]}</div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleResult;
