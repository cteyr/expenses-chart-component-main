const Container = () => {
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
            <div className="mon days" style={{ height: "100%" }}></div>mon
          </span>
          <span>
            <div className="tue days"></div>tue
          </span>
          <span>
            <div className="wed days"></div>wed
          </span>
          <span>
            <div className="thu days"></div>thu
          </span>
          <span>
            <div className="fri days"></div>fri
          </span>
          <span>
            <div className="sat days"></div>sat
          </span>
          <span>
            <div className="sun days"></div>sun
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
