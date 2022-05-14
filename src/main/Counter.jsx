import React, { Component } from "react";
import "./Counter.css";
import Link from "@material-ui/core/Link";
import Swal from "sweetalert2";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      dating: null,
      current: new Date().getTime(),
      years: null,
      result: "",
      achievement: "",
      display1: { display: "none" },
      display2: { display: "none" },
    };
    this.date = this.date.bind(this);
    this.calc = this.calc.bind(this);
    this.showDate = this.showDate.bind(this);
  }

  showDate() {
    const dataCurrent = this.state.current;
    const newDate = this.state.data;
    const diff = Math.abs(newDate - dataCurrent);
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    this.setState({ dating: days });
    this.setState({ years: parseInt(days / 365) });
    if (days / 365 >= 1) {
      this.setState({ display2: { display: "block" } });
      this.setState({ achievement: "You have been together for " });
      console.log(this.state.years, "ola");
    } else {
      this.setState({ display2: { display: "none" } });
      this.setState({ achievement: "" });
    }
    this.calc();
  }

  calc() {
    if (this.state.data === 0) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Enter a date!",
        confirmButtonColor: "#FF9A8B",
      });
    } else {
      this.setState({ display1: { display: "block" } });
      this.setState({ result: "You are together for " });
    }
  }

  date(e) {
    this.setState({ data: new Date(e.target.value).getTime() });
  }

  render() {
    return (
      <div className="datingCounter">
        <h1>Dating Counter 👩‍❤️‍👨</h1>
        <div className="box">
          <div className="forms">
            <label htmlFor="dating">Beginning of dating: </label>
            <input type="date" name="dating" id="dating" onChange={this.date} />
            <button onClick={this.showDate}>Submit</button>
          </div>
          <div className="res" style={this.state.display1}>
            <p>
              {this.state.result}
              <strong>{this.state.dating}</strong> day(s). 💞
            </p>
            <div className="achievement" style={this.state.display2}>
              <p className="congratulations">🏆 Congratulations!</p>
              {this.state.achievement}
              <strong>{this.state.years}</strong> year(s).
            </div>
          </div>
        </div>
        <p className="footer">
          <Link href="https://github.com/BrunoSapalacio">
            &copy; Bruno Sapalacio
          </Link>
        </p>
      </div>
    );
  }
}
