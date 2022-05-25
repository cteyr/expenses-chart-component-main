import { useState, useMemo, useEffect } from "react";
import json from "./../../data.json";

const Container = () => {
  const string_json = JSON.stringify(json);
  const object_json = JSON.parse(string_json);
  const [visibleAmountMon, setVisibleAmountMon] = useState(false);
  const [visibleAmountTue, setVisibleAmountTue] = useState(false);
  const [visibleAmountWed, setVisibleAmountWed] = useState(false);
  const [visibleAmountThu, setVisibleAmountThu] = useState(false);
  const [visibleAmountFri, setVisibleAmountFri] = useState(false);
  const [visibleAmountSat, setVisibleAmountSat] = useState(false);
  const [visibleAmountSun, setVisibleAmountSun] = useState(false);
  const [max, setMax] = useState(0);

  const calc_amount = (object_json) => {
    var max_account = 0;
    for (let i = 0; i < object_json.length; i++) {
      if (object_json[i].amount > max_account) {
        max_account = object_json[i].amount;
      }
    }
    return max_account;
  };

  useEffect(() => {
    // console.log("hola mundo");
  });

  const max_amount = useMemo(() => calc_amount(object_json), [object_json]);

  const styles = {
    height: object_json[2].amount,
    backgroundColor: "hsl(186, 34%, 60%)",
  };

  useEffect(() => {
    setMax(max_amount);
  }, []);
  //console.log(max);

  return (
    <div className="conatiner">
      <div className="head-container">
        <div className="head-tittle">
          <h6>My balance</h6>
          <p>$921.48</p>
        </div>
        <div className="circles">
          <div className="circle-left"></div>
          <div className="circle-right"></div>
        </div>
      </div>
      <div className="body-container">
        <div className="tittle-body">
          <h3>Spanding - Last 7 days</h3>
        </div>
        <div className="grafic">
          <span>
            {visibleAmountMon && (
              <div className="span-amount">${object_json[0].amount}</div>
            )}

            <div
              className={`mon days`}
              style={{ height: object_json[0].amount }}
              onMouseOver={() => setVisibleAmountMon(true)}
              onMouseLeave={() => setVisibleAmountMon(false)}
            ></div>
            {object_json[0].day}
          </span>
          <span>
            {visibleAmountTue && (
              <div className="span-amount">${object_json[1].amount}</div>
            )}
            <div
              className="tue days"
              style={{ height: object_json[1].amount }}
              onMouseOver={() => setVisibleAmountTue(true)}
              onMouseLeave={() => setVisibleAmountTue(false)}
            ></div>
            {object_json[1].day}
          </span>
          <span>
            {visibleAmountWed && (
              <div className="span-amount">${object_json[2].amount}</div>
            )}
            <div
              className="wed days"
              style={styles}
              onMouseOver={() => setVisibleAmountWed(true)}
              onMouseLeave={() => setVisibleAmountWed(false)}
            ></div>
            {object_json[2].day}
          </span>
          <span>
            {visibleAmountThu && (
              <div className="span-amount">${object_json[3].amount}</div>
            )}
            <div
              className="thu days"
              style={{ height: object_json[3].amount }}
              onMouseOver={() => setVisibleAmountThu(true)}
              onMouseLeave={() => setVisibleAmountThu(false)}
            ></div>
            {object_json[3].day}
          </span>
          <span>
            {visibleAmountFri && (
              <div className="span-amount">${object_json[4].amount}</div>
            )}
            <div
              className="fri days"
              style={{ height: object_json[4].amount }}
              onMouseOver={() => setVisibleAmountFri(true)}
              onMouseLeave={() => setVisibleAmountFri(false)}
            ></div>
            {object_json[4].day}
          </span>
          <span>
            {visibleAmountSat && (
              <div className="span-amount">${object_json[5].amount}</div>
            )}
            <div
              className="sat days"
              style={{ height: object_json[5].amount }}
              onMouseOver={() => setVisibleAmountSat(true)}
              onMouseLeave={() => setVisibleAmountSat(false)}
            ></div>
            {object_json[5].day}
          </span>
          <span>
            {visibleAmountSun && (
              <div className="span-amount">${object_json[6].amount}</div>
            )}
            <div
              className="sun days"
              style={{ height: object_json[6].amount }}
              onMouseOver={() => setVisibleAmountSun(true)}
              onMouseLeave={() => setVisibleAmountSun(false)}
            ></div>
            {object_json[6].day}
          </span>
        </div>
        <div className="footer-container">
          <div className="total-month">
            <h6>Total this month</h6>
            <p>$478.33</p>
          </div>
          <div className="last-month">
            <p>+2.4%</p>
            <p className="last-mont">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Container };
