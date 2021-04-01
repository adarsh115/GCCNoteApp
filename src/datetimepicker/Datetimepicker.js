import React from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";

export default function Datetimepicker() {
  return <MyDTPicker />;
}

class MyDTPicker extends React.Component {
  render() {
    let d = <Datetime dateFormat="DD-MM-YYYY" renderInput={this.renderInput} />;

    return d;
  }
  renderInput(props, openCalendar, closeCalendar) {
    function clear() {
      props.onChange({ target: { value: "" } });
    }
    return (
      <div>
        <input {...props} />
        <button onClick={openCalendar}>open calendar</button>
        <button onClick={closeCalendar}>close calendar</button>
        <button onClick={clear}>clear</button>
      </div>
    );
  }
}
